// http://i.imgur.com/UIeB3n4.png

// Given
var endorsements = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" },
];

// Result
// [
// { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 },
// { skill: 'css', user: ['Sue', 'Bill'], count: 2 },
// { skill: 'html', user: ['Sue'], count: 1 }
// ];
getSkills = (endorsements) => {
  const skillMap = new Map(); // Map<string, Array<string>>

  endorsements.forEach((endorsement) => {
    if (!skillMap.has(endorsement.skill)) {
      skillMap.set(endorsement.skill, [endorsement.user]);
    } else {
      const userList = skillMap.get(endorsement.skill);
      userList.push(endorsement.user);
      skillMap.set(endorsement.skill, userList);
    }
  });

  return Array.from(skillMap.keys()).map((skill) => {
    const userList = skillMap.get(skill);
    return {
      skill: skill,
      user: userList,
      count: userList.length,
    };
  });
};