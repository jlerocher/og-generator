"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CopyIcon } from "lucide-react";

export default function Home() {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [generatedTags, setGeneratedTags] = useState({
    html: '',
    nextjs: '',
  });

  const generateMetaTags = () => {
    const htmlTags = `
<meta property="og:url" content="${url}" />
<meta property="og:type" content="website" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:image" content="${image}" />
    `.trim();

    const nextjsTags = `
export const metadata: Metadata = {
  openGraph: {
    url: '${url}',
    type: 'website',
    title: '${title}',
    description: '${description}',
    images: [
      {
        url: '${image}',
      },
    ],
  },
};
    `.trim();

    setGeneratedTags({
      html: htmlTags,
      nextjs: nextjsTags,
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Open Graph Meta Tag Generator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Input Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="url">URL</Label>
                <Input id="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com" />
              </div>
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Your page title" />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="A brief description of your page" />
              </div>
              <div>
                <Label htmlFor="image">Image URL</Label>
                <Input id="image" value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://example.com/image.jpg" />
              </div>
              <Button type="button" onClick={generateMetaTags}>Generate Meta Tags</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Generated Meta Tags</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="html">
                <AccordionTrigger>HTML Tags</AccordionTrigger>
                <AccordionContent>
                  <div className="relative">
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                      <code>{generatedTags.html}</code>
                    </pre>
                    <Button
                      className="absolute top-2 right-2"
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(generatedTags.html)}
                    >
                      <CopyIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="nextjs">
                <AccordionTrigger>Next.js Metadata</AccordionTrigger>
                <AccordionContent>
                  <div className="relative">
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                      <code>{generatedTags.nextjs}</code>
                    </pre>
                    <Button
                      className="absolute top-2 right-2"
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(generatedTags.nextjs)}
                    >
                      <CopyIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}