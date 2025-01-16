'use client'
import { useState } from "react";
interface Comment {
    author: string;
    comment: string;
    _createdAt: string;
}
interface CommentSectionProps {
    postSlug: string;
}
export default function CommentSection({ }: CommentSectionProps) {
    const [author, setAuthor] = useState("");
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState<Comment[]>([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (author && comment) {
            const newComment = {
                author,
                comment,
                _createdAt: new Date().toISOString(),
            };
            // Add the new comment to the state 
            setComments([...comments, newComment]);
            setComment("");
            setAuthor("");
        }
    };
    return (
        <section className="pt-8 pb-5 px-4 bg-gray-200 sm:px-8">
            <h2 className="text-2xl font-bold">Leave a Comment</h2>
            {/* Comment Form */}
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Your Name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                />
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Your Comment"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    rows={4}
                    required
                />
                <button
                    type="submit"
                    className="bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-gray-900 hover:text-white"
                >
                    Submit Comment
                </button>
            </form>
            {/* Display Comments */}
            <div className="mt-8  pb-5 space-y-6">
                {comments.length > 0 ? (
                    comments.map((c, index) => (
                        <div key={index} className="p-4 bg-white rounded-md shadow-md">
                            <h3 className="font-semibold">{c.author}</h3>
                            <p className="text-gray-700">{c.comment}</p>
                            <p className="text-sm text-gray-500 mt-2">
                                {new Date(c._createdAt).toLocaleString()}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 mt-[-5px] mb-10">No comments yet. Be the first to comment!</p>
                )}
            </div>
        </section>
    );
}
