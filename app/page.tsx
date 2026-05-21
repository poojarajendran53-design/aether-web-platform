import { Navigation } from "@/components/aether/navigation"
import { HeroSection } from "@/components/aether/hero-section"
import { MoodPortals } from "@/components/aether/mood-portals"
import { InfiniteArtFeed } from "@/components/aether/infinite-art-feed"
import { FeaturedCreators } from "@/components/aether/featured-creators"
import { CreativeProfileCards } from "@/components/aether/creative-profile-cards"
import { CosmicCanvas } from "@/components/aether/cosmic-canvas"
import { RemixInspiration } from "@/components/aether/remix-inspiration"
import { LiveCreativeRooms } from "@/components/aether/live-creative-rooms"
import { LuminaryChallenges } from "@/components/aether/luminary-challenges"
import { ExperimentalFooter } from "@/components/aether/experimental-footer"

export default function AetherPage() {
  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <MoodPortals />
      <InfiniteArtFeed />
      <FeaturedCreators />
      <CreativeProfileCards />
      <CosmicCanvas />
      <RemixInspiration />
      <LiveCreativeRooms />
      <LuminaryChallenges />
      <ExperimentalFooter />
    </main>
  )
}
