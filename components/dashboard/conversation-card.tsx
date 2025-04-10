import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare, Clock } from "lucide-react";
// import { Conversation } from "@/data/mock-data";
// import { format } from "date-fns";
export interface Conversation {
  id: string;
  title: string;
  preview: string;
  timestamp: string;
  messages: number;
}

export const conversations: Conversation[] = [
  {
    id: "1",
    title: "Product description for new mobile app",
    preview:
      "I need help writing a compelling product description for our new mobile application...",
    timestamp: "2025-04-10T10:15:22",
    messages: 14,
  },
  {
    id: "2",
    title: "Email template for customer outreach",
    preview:
      "Could you help me draft a professional email template for reaching out to potential customers?",
    timestamp: "2025-04-09T13:42:18",
    messages: 8,
  },
  {
    id: "3",
    title: "Blog post about AI technology",
    preview:
      "I'm working on a blog post about the latest developments in AI technology...",
    timestamp: "2025-04-08T09:23:47",
    messages: 22,
  },
  {
    id: "4",
    title: "Social media strategy planning",
    preview:
      "Let's brainstorm some ideas for our social media strategy for the next quarter...",
    timestamp: "2025-04-06T15:37:52",
    messages: 18,
  },
  {
    id: "5",
    title: "Technical documentation review",
    preview:
      "I need assistance reviewing our API documentation to ensure it's clear and comprehensive...",
    timestamp: "2025-04-05T11:19:33",
    messages: 11,
  },
];

export function ConversationCard() {
  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">
          Saved Conversations
        </CardTitle>
        <CardDescription>Your recent AI conversations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {conversations.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">
              No conversations available
            </p>
          ) : (
            conversations.map((conversation) => (
              <div
                key={conversation.id}
                className="flex items-start space-x-3 border-b border-border pb-3 last:border-0 last:pb-0"
              >
                <div className="bg-secondary p-2 rounded-full">
                  <MessageSquare className="h-4 w-4 text-violet-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{conversation.title}</p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {conversation.preview}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {/* {format(new Date(conversation.timestamp), "MMM d, yyyy")} */}
                      Date
                    </div>
                    <div className="text-xs text-violet-500">
                      {conversation.messages} messages
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
