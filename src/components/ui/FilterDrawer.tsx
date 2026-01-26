import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterSection {
  title: string;
  options: FilterOption[];
}

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterSection[];
  activeFilters: Record<string, string[]>;
  onFilterChange: (section: string, value: string) => void;
}

export const FilterDrawer = ({
  isOpen,
  onClose,
  filters,
  activeFilters,
  onFilterChange,
}: FilterDrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-foreground/20 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 bottom-0 w-96 max-w-[90vw] bg-background z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <span className="font-serif text-lg tracking-[0.1em]">
                Filters
              </span>
              <button
                onClick={onClose}
                aria-label="Close filters"
                className="p-2 -mr-2 hover:opacity-60 transition-opacity"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {filters.map((section, sectionIndex) => (
                <div
                  key={section.title}
                  className={sectionIndex > 0 ? "mt-8 pt-8 border-t border-border" : ""}
                >
                  <h4 className="text-xs uppercase tracking-[0.2em] mb-6">
                    {section.title}
                  </h4>
                  <div className="space-y-4">
                    {section.options.map((option) => {
                      const isActive = activeFilters[section.title]?.includes(
                        option.value
                      );
                      return (
                        <button
                          key={option.value}
                          onClick={() =>
                            onFilterChange(section.title, option.value)
                          }
                          className={`block w-full text-left text-sm transition-colors duration-300 ${
                            isActive
                              ? "text-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-border flex space-x-4">
              <button
                onClick={() => {
                  // Clear all filters logic would go here
                }}
                className="flex-1 btn-outline"
              >
                Clear All
              </button>
              <button onClick={onClose} className="flex-1 btn-primary">
                Apply
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
