import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useSearch } from '../../hooks/useSearch';
import AchievementCard from '../../components/cards/AchievementCard';
import EmptyState from '../../components/common/EmptyState';
import PageTransition from '../../components/common/PageTransition';
import achievementsData from '../../data/achievements.json';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] } }
};

export default function Achievements() {
  const { searchQuery, setSearchQuery } = useSearch();

  const filteredAndSortedAchievements = useMemo(() => {
    let result = [...achievementsData];

    // 1. Search Filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter((item) => {
        const matchTitle = item.title?.toLowerCase().includes(query);
        const matchOrganizer = item.organizer?.toLowerCase().includes(query);
        const matchAchievement = item.achievement?.toLowerCase().includes(query);
        const matchDesc = item.description?.toLowerCase().includes(query);
        return matchTitle || matchOrganizer || matchAchievement || matchDesc;
      });
    }

    // 2. Sort: Newest first (by year)
    return result.sort((a, b) => parseInt(b.year) - parseInt(a.year));
  }, [searchQuery]);

  const handleResetSearch = () => {
    setSearchQuery('');
  };

  return (
    <PageTransition>
      <div className="flex flex-col h-full">
        {/* Folder Header */}
        <div className="mb-6 border-b border-border pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-text-main flex items-center gap-2">
              Achievements
            </h1>
            <p className="text-text-muted mt-1 text-sm">
              Honors, competition victories, and professional awards.
            </p>
          </div>
          
          {searchQuery && (
            <div className="text-xs text-text-muted self-end sm:self-center font-mono">
              Showing {filteredAndSortedAchievements.length} of {achievementsData.length} achievements
            </div>
          )}
        </div>

        {/* Main Grid or Empty State */}
        {filteredAndSortedAchievements.length === 0 ? (
          <EmptyState
            title="No achievements match your search"
            message={`We couldn't find any achievements matching "${searchQuery}". Try searching by competition name, organizer, or reward type.`}
            actionLabel="Clear Search"
            onAction={handleResetSearch}
          />
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8"
          >
            {filteredAndSortedAchievements.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <AchievementCard achievement={item} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
}
