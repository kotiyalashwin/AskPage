import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SavedChats } from "@/lib/actions/chat";
import { MessageSquare, Clock } from "lucide-react";
import { format } from "node:path";
import { Popover, PopoverContent } from "../ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { ScrollArea } from "../ui/scroll-area";
// import { Conversation } from "@/data/mock-data";
// import { format } from "date-fns";
export interface Conversation {
  id: string;
  title: string;
  preview: string;
  timestamp: string;
  messages: number;
}
interface Chats {
  text: string;
  isUser: boolean;
  timeStamp: string;
}

// export const conversations: Conversation[] = [
//   {
//     id: "1",
//     title: "Product description for new mobile app",
//     preview:
//       "I need help writing a compelling product description for our new mobile application...",
//     timestamp: "2025-04-10T10:15:22",
//     messages: 14,
//   },
//   {
//     id: "2",
//     title: "Email template for customer outreach",
//     preview:
//       "Could you help me draft a professional email template for reaching out to potential customers?",
//     timestamp: "2025-04-09T13:42:18",
//     messages: 8,
//   },
//   {
//     id: "3",
//     title: "Blog post about AI technology",
//     preview:
//       "I'm working on a blog post about the latest developments in AI technology...",
//     timestamp: "2025-04-08T09:23:47",
//     messages: 22,
//   },
//   {
//     id: "4",
//     title: "Social media strategy planning",
//     preview:
//       "Let's brainstorm some ideas for our social media strategy for the next quarter...",
//     timestamp: "2025-04-06T15:37:52",
//     messages: 18,
//   },
//   {
//     id: "5",
//     title: "Technical documentation review",
//     preview:
//       "I need assistance reviewing our API documentation to ensure it's clear and comprehensive...",
//     timestamp: "2025-04-05T11:19:33",
//     messages: 11,
//   },
// ];

export async function ConversationCard() {
  const conversations: Chats[][] = await SavedChats();
  console.log(conversations);

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
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
              {conversations.map((message, index) => (
                <Popover>
                  <PopoverTrigger className="w-full">
                    <div className="bg-secondary p-2 rounded-full items-center flex gap-4">
                      <MessageSquare className="h-4 w-4 text-violet-500" />
                      Saved Chat
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-[300px]">
                    <ScrollArea className="h-[300px] ">
                      {message.map((message, i) => (
                        <div
                          key={i}
                          className={`flex my-4 ${
                            message.isUser ? "justify-end" : "justify-start"
                          } 
                  animate-fade-in-up`}
                          style={{
                            animationDelay: `${index * 100}ms`,
                          }}
                        >
                          <div
                            className={` break-words rounded-2xl px-4 py-2 
                    ${
                      message.isUser
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-sm mr-4"
                        : "bg-[#1A1A1A] text-gray-100 rounded-bl-sm"
                    }
                    
                    shadow-lg backdrop-blur-sm relative group`}
                          >
                            <div>
                              <p>{message.text}</p>
                            </div>
                            <p
                              className={`text-[10px] mt-1 ${
                                message.isUser
                                  ? "text-blue-100"
                                  : "text-gray-400"
                              }`}
                            >
                              {message.timeStamp}
                            </p>
                          </div>
                        </div>
                      ))}
                    </ScrollArea>
                  </PopoverContent>
                </Popover>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
