"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { copyToClipboard, generateMetaTags } from "@/lib/functions";
import { CopyIcon } from "lucide-react";
import { useState } from "react";

export default function Home() {
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [generatedTags, setGeneratedTags] = useState({
        html: "",
        nextjs: "",
    });

    return (
        <section className=" mx-auto p-4">
            <h1 className="mb-6 text-3xl font-bold">
                Open Graph Meta Tag Generator
            </h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Input Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div>
                                <Label htmlFor="url">URL</Label>
                                <Input
                                    id="url"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    placeholder="https://example.com"
                                />
                            </div>
                            <div>
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Your page title"
                                />
                            </div>
                            <div>
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                    placeholder="A brief description of your page"
                                />
                            </div>
                            <div>
                                <Label htmlFor="image">Image URL</Label>
                                <Input
                                    id="image"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>
                            <Button type="button" onClick={() => generateMetaTags({url, title, description, image, setGeneratedTags})}>
                                Generate Meta Tags
                            </Button>
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
                                        <pre className="overflow-x-auto rounded-md bg-gray-100 p-4">
                                            <code>{generatedTags.html}</code>
                                        </pre>
                                        <Button
                                            className="absolute right-2 top-2"
                                            size="sm"
                                            variant="outline"
                                            onClick={() =>
                                                copyToClipboard(
                                                    generatedTags.html,
                                                )
                                            }
                                        >
                                            <CopyIcon className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="nextjs">
                                <AccordionTrigger>
                                    Next.js Metadata
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="relative">
                                        <pre className="overflow-x-auto rounded-md bg-gray-100 p-4">
                                            <code>{generatedTags.nextjs}</code>
                                        </pre>
                                        <Button
                                            className="absolute right-2 top-2"
                                            size="sm"
                                            variant="outline"
                                            onClick={() =>
                                                copyToClipboard(
                                                    generatedTags.nextjs,
                                                )
                                            }
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
        </section>
    );
}
