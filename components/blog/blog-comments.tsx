"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, ThumbsUp, Reply } from "lucide-react"

export function BlogComments() {
  const [newComment, setNewComment] = useState("")
  const [replyTo, setReplyTo] = useState<number | null>(null)
  const [replyText, setReplyText] = useState("")

  const comments = [
    {
      id: 1,
      author: "Ahmed Al-Rashid",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      date: "2 days ago",
      content:
        "Excellent analysis! I've been considering investing in Dubai Creek Harbour and this article confirms my research. The infrastructure development there is impressive.",
      likes: 12,
      replies: [
        {
          id: 11,
          author: "Shibi Kabeer",
          avatar:
            "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
          date: "1 day ago",
          content:
            "Thank you Ahmed! Dubai Creek Harbour is indeed one of my top recommendations for 2025. I'd be happy to show you some exclusive properties there. Feel free to book a consultation.",
          likes: 8,
          isAuthor: true,
        },
      ],
    },
    {
      id: 2,
      author: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      date: "3 days ago",
      content:
        "As a first-time investor, this article is incredibly helpful. The section on investment strategies is particularly valuable. Can you recommend any specific off-plan projects for beginners?",
      likes: 8,
      replies: [],
    },
    {
      id: 3,
      author: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      date: "4 days ago",
      content:
        "Great insights on the Golden Visa impact. I obtained mine last year through property investment and the process was smoother than expected. The market stability it provides is remarkable.",
      likes: 15,
      replies: [],
    },
  ]

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("New comment:", newComment)
    setNewComment("")
  }

  const handleSubmitReply = (e: React.FormEvent, commentId: number) => {
    e.preventDefault()
    console.log("Reply to comment", commentId, ":", replyText)
    setReplyText("")
    setReplyTo(null)
  }

  return (
    <div className="space-y-8 mt-12">
      <div className="flex items-center gap-3">
        <MessageCircle className="h-6 w-6 text-amber-600" />
        <h2 className="text-2xl font-bold text-navy-900">Comments ({comments.length})</h2>
      </div>

      {/* Add Comment Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-navy-900">Join the Discussion</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitComment} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" required />
              </div>
            </div>
            <div>
              <Label htmlFor="comment">Comment</Label>
              <textarea
                id="comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 min-h-[100px]"
                required
              />
            </div>
            <Button type="submit" className="bg-amber-600 hover:bg-amber-700">
              Post Comment
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <Card key={comment.id} className="border-l-4 border-l-amber-600">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={comment.author} />
                  <AvatarFallback>
                    {comment.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-navy-900">{comment.author}</h4>
                    {comment.author === "Shibi Kabeer" && (
                      <span className="bg-amber-600 text-white text-xs px-2 py-1 rounded">Author</span>
                    )}
                    <span className="text-sm text-gray-500">{comment.date}</span>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{comment.content}</p>
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-amber-600">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {comment.likes}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-600 hover:text-amber-600"
                      onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
                    >
                      <Reply className="h-4 w-4 mr-1" />
                      Reply
                    </Button>
                  </div>

                  {/* Reply Form */}
                  {replyTo === comment.id && (
                    <form onSubmit={(e) => handleSubmitReply(e, comment.id)} className="mt-4 space-y-3">
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Write a reply..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 min-h-[80px]"
                        required
                      />
                      <div className="flex gap-2">
                        <Button type="submit" size="sm" className="bg-amber-600 hover:bg-amber-700">
                          Post Reply
                        </Button>
                        <Button type="button" size="sm" variant="outline" onClick={() => setReplyTo(null)}>
                          Cancel
                        </Button>
                      </div>
                    </form>
                  )}

                  {/* Replies */}
                  {comment.replies.length > 0 && (
                    <div className="mt-6 space-y-4 pl-4 border-l-2 border-gray-200">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="flex items-start gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={reply.avatar || "/placeholder.svg"} alt={reply.author} />
                            <AvatarFallback>
                              {reply.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h5 className="font-semibold text-navy-900 text-sm">{reply.author}</h5>
                              {reply.isAuthor && (
                                <span className="bg-amber-600 text-white text-xs px-2 py-1 rounded">Author</span>
                              )}
                              <span className="text-xs text-gray-500">{reply.date}</span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">{reply.content}</p>
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-amber-600 mt-2">
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              {reply.likes}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
