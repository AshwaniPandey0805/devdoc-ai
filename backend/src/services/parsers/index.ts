import { ParserFactory } from "./ParserFactory.js";
import { SmartPdfParser } from "./SmartPdfParser.js";
import { MarkdownDocxParser } from "./MarkdownDocxParser.js";
import { TabularDataParser } from "./TabularDataParser.js";
import { JsonDataParser } from "./JsonDataParser.js";
import { PlainTextParser } from "./PlainTextParser.js";

// Initialize and register all production parsers
ParserFactory.register(new SmartPdfParser());
ParserFactory.register(new MarkdownDocxParser());
ParserFactory.register(new TabularDataParser());
ParserFactory.register(new JsonDataParser());
ParserFactory.register(new PlainTextParser());

export * from "./BaseParser.js";
export * from "./ParserFactory.js";
export * from "./SmartPdfParser.js";
export * from "./MarkdownDocxParser.js";
export * from "./TabularDataParser.js";
export * from "./JsonDataParser.js";
export * from "./PlainTextParser.js";
