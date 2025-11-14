import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import express from 'express';
import { z } from 'zod';

const app = express();

const server = new McpServer({
    name: 'my-app',
    version: '1.0.0'
});

server.registerTool(
    'add',
    {
        title: 'Addition Tool',
        description: 'Add two numbers',
        inputSchema: {
            a: z.number().describe('First number'),
            b: z.number().describe('Second number')
        }
    },
    async ({ a, b }) => {
        const output = { result: a + b };
        return {
            content: [{ type: 'text', text: JSON.stringify(output) }],
            structuredContent: output
        };
    }
);

server.registerTool(
    'subtract',
    {
        title: 'Subtraction Tool',
        description: 'Subtract two numbers',
        inputSchema: {
            a: z.number().describe('First number'),
            b: z.number().describe('Second number')
        }
    },
    async ({ a, b }) => {
        const output = { result: a - b };
        return {
            content: [{ type: 'text', text: JSON.stringify(output) }],
            structuredContent: output
        };
    }
);

const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
    console.log(`Demo MCP Server running on http://localhost:${port}/mcp`);
}).on('error', error => {
    console.error('Server error:', error);
    process.exit(1);
});