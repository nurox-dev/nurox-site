'use server';

/**
 * @fileOverview An AI-powered tool that answers user questions based on all available case studies.
 *
 * - askCaseStudyFAQ - A function that answers user questions based on case studies.
 * - AskCaseStudyFAQInput - The input type for the askCaseStudyFAQ function.
 * - AskCaseStudyFAQOutput - The return type for the askCaseStudyFAQ function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskCaseStudyFAQInputSchema = z.object({
  question: z.string().describe('The user question about Nurox solutions.'),
  caseStudies: z.string().describe('All available case studies as a string.'),
});
export type AskCaseStudyFAQInput = z.infer<typeof AskCaseStudyFAQInputSchema>;

const AskCaseStudyFAQOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question based on the case studies.'),
  sources: z.array(z.string()).describe('Links to the case studies used to answer the question.'),
});
export type AskCaseStudyFAQOutput = z.infer<typeof AskCaseStudyFAQOutputSchema>;

export async function askCaseStudyFAQ(input: AskCaseStudyFAQInput): Promise<AskCaseStudyFAQOutput> {
  return askCaseStudyFAQFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askCaseStudyFAQPrompt',
  input: {schema: AskCaseStudyFAQInputSchema},
  output: {schema: AskCaseStudyFAQOutputSchema},
  prompt: `You are an AI assistant that answers questions based on Nurox case studies.\n\nYou have access to the following case studies:\n\n{{{caseStudies}}}\n\nAnswer the following question using the case studies provided. Include links to the case studies used to answer the question. If a case study is not relevant, do not include it in the answer.\n\nQuestion: {{{question}}}`,
});

const askCaseStudyFAQFlow = ai.defineFlow(
  {
    name: 'askCaseStudyFAQFlow',
    inputSchema: AskCaseStudyFAQInputSchema,
    outputSchema: AskCaseStudyFAQOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
