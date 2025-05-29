const ScrollingBanner = () => {
  const features = [
    "📖 Easy Story Prompts",
    "🎨 Professional Design",
    "📱 Voice-to-Text Recording",
    "🖼️ Photo Integration", 
    "✨ Beautiful Layout",
    "🎁 Perfect Gift",
    "📚 Hardcover Quality",
    "💝 Family Keepsake",
    "🖋️ Guided Writing",
    "⭐ 5-Star Reviews"
  ]

  return (
    <div className="bg-brand-blue text-white py-4 overflow-hidden scroll-container">
      <div className="flex whitespace-nowrap animate-scroll">
        {/* First set of features */}
        {features.map((feature, index) => (
          <span key={index} className="mx-8 text-lg font-medium font-inter">
            {feature}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {features.map((feature, index) => (
          <span key={`duplicate-${index}`} className="mx-8 text-lg font-medium font-inter">
            {feature}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ScrollingBanner