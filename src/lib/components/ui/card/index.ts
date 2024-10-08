import Root from "./card.svelte";
import Content from "./card-content.svelte";
import Description from "./card-description.svelte";
import Attribution from "./card-attribution.svelte";
import Quote from "./card-quote.svelte";
import Footer from "./card-footer.svelte";
import Header from "./card-header.svelte";
import Title from "./card-title.svelte";

export {
	Root,
	Content,
	Description,
	Quote,
	Attribution,
	Footer,
	Header,
	Title,
	//
	Root as Card,
	Content as CardContent,
	Description as CardDescription,
	Quote as CardQuote,
	Attribution as CardAttribution,
	Footer as CardFooter,
	Header as CardHeader,
	Title as CardTitle,
};

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
