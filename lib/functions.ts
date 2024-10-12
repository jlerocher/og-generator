import { toast } from "@/hooks/use-toast";

type generateMetaTagsProps = {
    url: string;
    title: string;
    description: string;
    image: string;
    setGeneratedTags: React.Dispatch<React.SetStateAction<any>>;
};

export const generateMetaTags = ({url, title, description, image, setGeneratedTags}: generateMetaTagsProps) => {
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

    return toast({
        title: "Meta Tags Generated",
        description: "Your meta tags have been generated successfully.",
        variant: "success",
    })
};

export const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
        title: "Copied to Clipboard",
        description: "The meta tags have been copied to your clipboard.",
        variant: "success",
    });
};
