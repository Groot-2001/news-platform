import type { Article } from "@news/types";

import { authors } from "./authors";
import { categories } from "./categories";
import { tags } from "./tags";

export const articles: Article[] = [
    {
        id: "article-1",
        title: "Artificial Intelligence Is Transforming Modern Newsrooms",
        slug: "artificial-intelligence-transforming-modern-newsrooms",
        excerpt:
            "Publishers are increasingly adopting AI-powered workflows to accelerate content production and audience analysis.",
        coverImage: "/articles/image1.jpg",
        publishedAt: "2026-06-15T08:00:00Z",
        author: authors[0],
        category: categories[0],
        tags: [tags[0], tags[1]],
        contentBlocks: [
            {
                type: "heading",
                level: 2,
                content: "The Rise of AI in Publishing"
            },
            {
                type: "paragraph",
                content:
                    "Artificial intelligence is rapidly becoming an essential tool for publishers around the world."
            },
            {
                type: "advertisement",
                slot: "article-inline-1"
            },
            {
                type: "paragraph",
                content:
                    "News organizations are leveraging machine learning for content recommendations and audience engagement."
            },
            {
                type: "quote",
                content:
                    "AI will augment journalists, not replace them.",
                author: "Media Research Institute"
            }
        ]
    },
    {
        id: "article-2",
        title: "Quantum Computing Breakthroughs Set to Revolutionize Technology",
        slug: "quantum-computing-breakthroughs-revolutionize-technology",
        excerpt:
            "Major tech companies announce significant advances in quantum processors, promising exponential gains in computational power.",
        coverImage: "/articles/image2.jpg",
        publishedAt: "2026-06-14T14:30:00Z",
        author: authors[1],
        category: categories.find(c => c.slug === "technology") || categories[0],
        tags: [tags[0], tags[2]],
        contentBlocks: [
            {
                type: "heading",
                level: 2,
                content: "The Quantum Leap Forward"
            },
            {
                type: "paragraph",
                content:
                    "Researchers at leading institutions have achieved stable qubits at room temperature, a milestone long thought impossible."
            },
            {
                type: "advertisement",
                slot: "article-inline-1"
            },
            {
                type: "paragraph",
                content:
                    "This development could transform cryptography, drug discovery, and climate modeling within the next decade."
            },
            {
                type: "quote",
                content:
                    "We're entering the quantum era faster than anyone predicted.",
                author: "Dr. Elena Voss, Quantum Labs"
            }
        ]
    },
    {
        id: "article-3",
        title: "Global Election Tensions Rise Amid Cybersecurity Threats",
        slug: "global-election-tensions-rise-cybersecurity-threats",
        excerpt:
            "Foreign interference attempts detected in multiple democratic nations ahead of key votes.",
        coverImage: "/articles/image3.jpg",
        publishedAt: "2026-06-13T09:15:00Z",
        author: authors[1],
        category: categories.find(c => c.slug === "politics") || categories[0],
        tags: [tags[2], tags[1]],
        contentBlocks: [
            {
                type: "heading",
                level: 2,
                content: "Safeguarding Democracy in the Digital Age"
            },
            {
                type: "paragraph",
                content:
                    "Intelligence agencies report a surge in sophisticated phishing and disinformation campaigns targeting voters and officials."
            },
            {
                type: "advertisement",
                slot: "article-inline-1"
            },
            {
                type: "paragraph",
                content:
                    "Experts urge immediate investment in election infrastructure security to maintain public trust."
            },
            {
                type: "quote",
                content:
                    "Vigilance is our strongest defense against digital authoritarianism.",
                author: "International Election Watch"
            }
        ]
    },
    {
        id: "article-4",
        title: "Sustainable Business Models Drive Record Profits for Green Tech Firms",
        slug: "sustainable-business-models-drive-profits-green-tech",
        excerpt:
            "Companies embracing ESG principles outperform traditional competitors in Q2 earnings.",
        coverImage: "/articles/image4.jpg",
        publishedAt: "2026-06-12T11:45:00Z",
        author: authors[0],
        category: categories.find(c => c.slug === "business") || categories[0],
        tags: [tags[1], tags[2]],
        contentBlocks: [
            {
                type: "heading",
                level: 2,
                content: "The Profitability of Purpose"
            },
            {
                type: "paragraph",
                content:
                    "From renewable energy to circular economy startups, businesses prioritizing sustainability are seeing stronger investor confidence and customer loyalty."
            },
            {
                type: "advertisement",
                slot: "article-inline-1"
            },
            {
                type: "paragraph",
                content:
                    "Analysts predict this trend will accelerate as regulatory pressures increase worldwide."
            },
            {
                type: "quote",
                content:
                    "Sustainability isn't just good ethics—it's smart economics.",
                author: "World Business Council"
            }
        ]
    },
    {
        id: "article-5",
        title: "AI Ethics Debate Heats Up as Regulators Scrutinize Big Tech",
        slug: "ai-ethics-debate-regulators-scrutinize-big-tech",
        excerpt:
            "New proposals aim to balance innovation with accountability in artificial intelligence development.",
        coverImage: "/articles/image5.jpg",
        publishedAt: "2026-06-15T07:20:00Z",
        author: authors[1],
        category: categories.find(c => c.slug === "technology") || categories[0],
        tags: [tags[0], tags[1]],
        contentBlocks: [
            {
                type: "heading",
                level: 2,
                content: "Finding the Balance"
            },
            {
                type: "paragraph",
                content:
                    "Lawmakers in Europe and North America are pushing for stricter oversight on AI systems used in hiring, lending, and content moderation."
            },
            {
                type: "advertisement",
                slot: "article-inline-1"
            },
            {
                type: "paragraph",
                content:
                    "Industry leaders warn that overregulation could stifle technological progress."
            },
            {
                type: "quote",
                content:
                    "Responsible AI is the only path to sustainable innovation.",
                author: "Global Tech Alliance"
            }
        ]
    }
];
