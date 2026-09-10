"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { linkedInReviews } from "@/data/reviews";
import { LINKEDIN_URL } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HoverCard, FadeIn } from "@/components/animations";
import {
  ThumbsUp,
  MessageSquare,
  Repeat2,
  CheckCircle2,
  ShieldCheck,
  Star,
  ExternalLink,
  Sparkles,
  Heart,
  Share2,
} from "lucide-react";

// Official LinkedIn Brand Icon
function LinkedInIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function LinkedInReviewsSection() {
  const [filter, setFilter] = useState<"all" | "internship" | "business">("all");
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    linkedInReviews.forEach((r) => {
      initial[r.id] = r.likes;
    });
    return initial;
  });

  const toggleLike = (id: string) => {
    setLikedPosts((prev) => {
      const isLiked = !prev[id];
      setLikeCounts((counts) => ({
        ...counts,
        [id]: isLiked ? counts[id] + 1 : counts[id] - 1,
      }));
      return { ...prev, [id]: isLiked };
    });
  };

  const filteredReviews = linkedInReviews.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <section
      id="linkedin-reviews"
      className="relative overflow-hidden py-12 lg:py-16 bg-navy-50/40 dark:bg-navy-950/40 border-y border-navy-100/70 dark:border-navy-800/70 scroll-mt-20"
    >
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute -left-16 top-1/4 h-64 w-64 rounded-full bg-[#0A66C2]/10 blur-3xl dark:bg-[#0A66C2]/15" />
      <div className="pointer-events-none absolute -right-16 bottom-1/4 h-64 w-64 rounded-full bg-xora-500/10 blur-3xl dark:bg-xora-500/15" />

      <div className="container-x relative">
        {/* Header with LinkedIn verification badge */}
        <div className="text-center">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#0A66C2]/20 bg-[#0A66C2]/10 px-3 py-1 text-xs font-semibold text-[#0A66C2] dark:border-[#0A66C2]/30 dark:bg-[#0A66C2]/20 dark:text-cyan-400 backdrop-blur-sm">
              <LinkedInIcon className="h-3.5 w-3.5 text-[#0A66C2] dark:text-cyan-400" />
              <span>LinkedIn Verified Reviews</span>
              <span className="flex items-center text-amber-500 font-bold ml-1">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400 mr-0.5" />
                4.9/5
              </span>
            </div>
          </FadeIn>

          <div className="mt-3">
            <SectionHeading
              eyebrow="Social Proof & Alumni Stories"
              title="What People Are Saying on LinkedIn"
              subtitle="Real posts, reviews, and success stories from our interns and business partners across LinkedIn."
            />
          </div>

          {/* Category Filter Pills */}
          <FadeIn direction="up" delay={0.1}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {[
                { id: "all", label: "All Posts", count: linkedInReviews.length },
                {
                  id: "internship",
                  label: "🎓 Student Interns",
                  count: linkedInReviews.filter((r) => r.category === "internship").length,
                },
                {
                  id: "business",
                  label: "💼 Business Clients",
                  count: linkedInReviews.filter((r) => r.category === "business").length,
                },
              ].map((tab) => {
                const isActive = filter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setFilter(tab.id as typeof filter)}
                    className={`relative rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-[#0A66C2] text-white shadow-sm"
                        : "bg-white/80 text-navy-600 hover:bg-white hover:text-navy-950 border border-navy-100 dark:bg-navy-900/80 dark:text-navy-300 dark:hover:text-white dark:border-navy-800"
                    }`}
                  >
                    {tab.label}
                    <span
                      className={`ml-1.5 inline-flex items-center justify-center rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-navy-100 text-navy-600 dark:bg-navy-800 dark:text-navy-300"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </FadeIn>
        </div>

        {/* Reviews Grid */}
        <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((post) => {
              const isLiked = !!likedPosts[post.id];
              const likes = likeCounts[post.id] ?? post.likes;

              return (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 10 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  <HoverCard lift={-4} className="h-full">
                    <div className="flex h-full flex-col justify-between overflow-hidden rounded-xl border border-navy-100/90 bg-white shadow-card backdrop-blur-md transition-all duration-300 hover:border-[#0A66C2]/40 hover:shadow-lg hover:shadow-[#0A66C2]/5 dark:border-navy-800 dark:bg-navy-900/90">
                      {/* Top Bar: Author Header */}
                      <div className="p-4 pb-2.5">
                        <div className="flex items-start justify-between gap-2.5">
                          <div className="flex items-start gap-2.5">
                            {/* Avatar */}
                            <div
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr ${post.avatarBg} text-xs font-bold text-white shadow-sm ring-2 ring-white dark:ring-navy-900`}
                            >
                              {post.avatar}
                            </div>

                            {/* Details */}
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1">
                                <h4 className="truncate text-xs font-bold text-navy-950 dark:text-white">
                                  {post.name}
                                </h4>
                                <CheckCircle2 className="h-3 w-3 shrink-0 text-[#0A66C2] fill-[#0A66C2]/10" />
                              </div>
                              <p className="truncate text-[11px] text-navy-500 dark:text-navy-400">
                                {post.role}
                              </p>
                              <div className="flex items-center gap-1.5 text-[10px] text-navy-400 dark:text-navy-500">
                                <span className="truncate">{post.companyOrCollege}</span>
                                <span>•</span>
                                <span>{post.timeAgo}</span>
                              </div>
                            </div>
                          </div>

                          {/* LinkedIn Logo Button */}
                          <a
                            href={post.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${post.name}'s review on LinkedIn`}
                            className="flex h-6 w-6 shrink-0 items-center justify-center rounded text-[#0A66C2] transition-colors hover:bg-[#0A66C2]/10 dark:hover:bg-[#0A66C2]/20"
                          >
                            <LinkedInIcon className="h-3.5 w-3.5 text-[#0A66C2]" />
                          </a>
                        </div>

                        {/* Verified Certificate Badge if present */}
                        {post.verifiedCertificateId && (
                          <div className="mt-2.5">
                            <Link
                              href={`/verify-certificate?id=${post.verifiedCertificateId}`}
                              className="inline-flex items-center gap-1 rounded-md border border-emerald-500/20 bg-emerald-50/80 px-2 py-0.5 text-[10px] font-medium text-emerald-700 transition-colors hover:bg-emerald-100/80 dark:border-emerald-500/30 dark:bg-emerald-950/40 dark:text-emerald-300"
                            >
                              <ShieldCheck className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                              <span>Verified ID: {post.verifiedCertificateId}</span>
                              <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                            </Link>
                          </div>
                        )}

                        {/* Rating Stars */}
                        <div className="mt-2 flex items-center gap-0.5">
                          {[...Array(post.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-3 w-3 fill-amber-400 text-amber-400"
                            />
                          ))}
                          <span className="ml-1 text-[10px] font-semibold text-navy-600 dark:text-navy-300">
                            5.0
                          </span>
                        </div>
                      </div>

                      {/* Post Content */}
                      <div className="px-4 py-1.5 flex-1 flex flex-col justify-between">
                        <div>
                          <p className="whitespace-pre-line text-[11.5px] sm:text-xs leading-relaxed text-navy-700 dark:text-navy-200">
                            {post.content}
                          </p>

                          {/* Hashtags */}
                          <div className="mt-2.5 flex flex-wrap gap-1">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10.5px] font-medium text-[#0A66C2] hover:underline cursor-pointer dark:text-cyan-400"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Engagement Counts Bar */}
                      <div className="mt-2.5 border-t border-navy-50 px-4 pt-2 pb-1.5 dark:border-navy-800">
                        <div className="flex items-center justify-between text-[10.5px] text-navy-500 dark:text-navy-400">
                          {/* Reaction Icons */}
                          <div className="flex items-center gap-1">
                            <span className="flex -space-x-1">
                              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#0A66C2] text-white ring-1 ring-white dark:ring-navy-900">
                                <ThumbsUp className="h-2 w-2" />
                              </span>
                              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 text-white ring-1 ring-white dark:ring-navy-900">
                                <Sparkles className="h-2 w-2" />
                              </span>
                              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-rose-500 text-white ring-1 ring-white dark:ring-navy-900">
                                <Heart className="h-2 w-2 fill-white" />
                              </span>
                            </span>
                            <span className="font-semibold text-navy-700 dark:text-navy-200 ml-0.5">
                              {likes}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 text-[10px]">
                            <span>{post.comments} comments</span>
                            <span>•</span>
                            <span>{post.reposts} reposts</span>
                          </div>
                        </div>

                        {/* Interactive Action Buttons */}
                        <div className="mt-1.5 flex items-center justify-between border-t border-navy-50 pt-1.5 text-[11px] font-semibold dark:border-navy-800">
                          {/* Like Button */}
                          <button
                            onClick={() => toggleLike(post.id)}
                            className={`flex items-center gap-1 rounded-md px-2 py-1 transition-colors ${
                              isLiked
                                ? "text-[#0A66C2] bg-[#0A66C2]/10 dark:bg-[#0A66C2]/20 font-bold"
                                : "text-navy-600 hover:bg-navy-50 dark:text-navy-300 dark:hover:bg-navy-800"
                            }`}
                          >
                            <ThumbsUp
                              className={`h-3 w-3 transition-transform ${
                                isLiked ? "scale-110 fill-[#0A66C2]" : ""
                              }`}
                            />
                            <span>{isLiked ? "Liked" : "Like"}</span>
                          </button>

                          {/* Comment Button */}
                          <a
                            href={post.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 rounded-md px-2 py-1 text-navy-600 hover:bg-navy-50 dark:text-navy-300 dark:hover:bg-navy-800 transition-colors"
                          >
                            <MessageSquare className="h-3 w-3" />
                            <span className="hidden sm:inline">Comment</span>
                          </a>

                          {/* Repost Button */}
                          <a
                            href={post.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 rounded-md px-2 py-1 text-navy-600 hover:bg-navy-50 dark:text-navy-300 dark:hover:bg-navy-800 transition-colors"
                          >
                            <Repeat2 className="h-3 w-3" />
                            <span className="hidden sm:inline">Repost</span>
                          </a>

                          {/* Share on LinkedIn Button */}
                          <a
                            href={post.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 rounded-md px-2 py-1 text-[#0A66C2] hover:bg-[#0A66C2]/10 dark:hover:bg-[#0A66C2]/20 transition-colors"
                          >
                            <Share2 className="h-3 w-3" />
                            <span className="hidden sm:inline">Share</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </HoverCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom LinkedIn Callout Bar */}
        <FadeIn direction="up" delay={0.2} className="mt-10">
          <div className="flex flex-col items-center justify-between gap-3.5 rounded-xl border border-[#0A66C2]/20 bg-gradient-to-r from-[#0A66C2]/10 via-white/80 to-xora-500/10 p-4 shadow-sm backdrop-blur-md dark:from-[#0A66C2]/20 dark:via-navy-900/80 dark:to-xora-500/10 sm:flex-row sm:px-6">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0A66C2] text-white shadow-sm">
                <LinkedInIcon className="h-4 w-4" />
              </span>
              <div>
                <h4 className="font-display text-sm font-bold text-navy-950 dark:text-white">
                  Join 1,000+ Students & Professionals on LinkedIn
                </h4>
                <p className="text-xs text-navy-600 dark:text-navy-300">
                  Tag @Xora Technologies in your certificate post to be featured on our official alumni wall.
                </p>
              </div>
            </div>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#0A66C2] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#084e96]"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
              <span>Connect on LinkedIn</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
