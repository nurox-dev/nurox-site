'use client';

import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { askCaseStudyFAQ, type AskCaseStudyFAQOutput } from '@/ai/flows/case-study-faq';
import { getCaseStudiesAsString } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Lightbulb, Link as LinkIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import Link from 'next/link';

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} className="w-full md:w-auto">
            {pending ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Answer...
                </>
            ) : (
                'Ask AI'
            )}
        </Button>
    );
}

const initialState = {
    result: null,
    error: null,
}

export default function Faq() {
    const [state, formAction] = useFormState(async (previousState, formData: FormData) => {
        const question = formData.get('question') as string;
        if (!question || question.length < 10) {
            return { result: null, error: 'Please enter a question with at least 10 characters.' };
        }
        try {
            const caseStudies = getCaseStudiesAsString();
            const result = await askCaseStudyFAQ({ question, caseStudies });
            return { result, error: null };
        } catch (e) {
            console.error(e);
            return { result: null, error: 'An error occurred while fetching the answer. Please try again.' };
        }
    }, initialState);


    return (
        <section id="faq" className="py-20 md:py-28 bg-primary/5">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        Have Questions? We Have Answers.
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Ask our AI assistant any question about our work, and get instant answers based on our client success stories.
                    </p>
                </div>
                <Card className="shadow-lg">
                    <CardContent className="p-6">
                        <form action={formAction} className="space-y-4">
                            <Textarea
                                name="question"
                                placeholder="e.g., How did you help a company improve customer satisfaction?"
                                rows={3}
                                required
                                minLength={10}
                                className="bg-background"
                            />
                            <div className="flex justify-end">
                                <SubmitButton />
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {state.error && (
                    <Alert variant="destructive" className="mt-6">
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{state.error}</AlertDescription>
                    </Alert>
                )}

                {state.result && (
                    <Card className="mt-8 animate-fade-in">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Lightbulb className="text-primary" />
                                AI Generated Answer
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg leading-relaxed">{state.result.answer}</p>
                            {state.result.sources && state.result.sources.length > 0 && (
                                <div className="mt-6">
                                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                                        <LinkIcon className="h-4 w-4 text-muted-foreground" />
                                        Sources
                                    </h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        {state.result.sources.map((source, index) => (
                                            <li key={index}>
                                                <Link href={source} className="text-primary underline hover:no-underline">
                                                    Case Study Reference
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                )}
            </div>
        </section>
    );
}
