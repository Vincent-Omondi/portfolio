"use client";
import { SkillsData } from "@/db/main";
import { Icon } from "@iconify/react";
import { Variants, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "../../styles/components/Skills.module.scss";

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(SkillsData.categories[0].title);

  return (
    <div className={styles.skills} id="skills">
      <h2 className={styles.skills_title}>{SkillsData.title}</h2>
      <div className={styles.skills_container}>
        <div className={styles.skills_tabs}>
          {SkillsData.categories.map((category, i) => (
            <motion.button
              key={i}
              className={`${styles.skills_tab} ${
                activeCategory === category.title ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(category.title)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.title}
            </motion.button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          {SkillsData.categories.map((category) => 
            category.title === activeCategory && (
              <motion.div
                key={category.title}
                className={styles.skills_content}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {category.skills.map((skillGroup, j) => (
                  <div key={j} className={styles.skill_group}>
                    <h4 className={styles.skill_group_title}>
                      {skillGroup.category}
                    </h4>
                    <div className={styles.skill_items}>
                      {skillGroup.items.map((skill, k) => (
                        <motion.div
                          key={k}
                          className={styles.skill_item}
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ 
                            opacity: 1, 
                            y: 0,
                            transition: { delay: k * 0.05 } 
                          }}
                        >
                          <Icon 
                            icon={skill.icon} 
                            className={styles.skill_icon} 
                          />
                          <span className={styles.skill_name}>
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Skills;