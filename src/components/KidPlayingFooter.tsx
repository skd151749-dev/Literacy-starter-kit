import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function KidPlayingFooter() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1588763714140-ab422a5f36bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwa2lkcyUyMHBsYXlpbmclMjBsZWFybmluZyUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3Njk1NzEyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Kids playing and learning together"
    },
    {
      src: "https://images.unsplash.com/photo-1637195141628-f0f75585a07f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJlYWRpbmclMjBib29rcyUyMHN0dWR5aW5nfGVufDF8fHx8MTc2OTU4MDI5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Children reading books and studying"
    },
    {
      src: "https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbGVhcm5pbmclMjBjbGFzc3Jvb20lMjBhY3Rpdml0aWVzfGVufDF8fHx8MTc2OTUzMTUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Kids learning in classroom activities"
    }
  ];

  return (
    <footer className="bg-white py-6 border-t-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Multiple Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex justify-center"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="max-w-full h-auto max-h-40 rounded-xl shadow-lg object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
}