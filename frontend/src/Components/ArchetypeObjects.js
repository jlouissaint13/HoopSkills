

export const archetypes = {
    pg: {
        playmaker: {
            id: "playmaker",
            icon: "🧠",
            name: "Playmaker",
            description: "Sees everything before it happens and delivers passes like magic"
        },
        shotcreator: {
            id: "shotcreator",
            icon: "🎯",
            name: "Shot Creator",
            description: "Always finds a way to get a bucket no matter the pressure or the clock"
        },
        slasher: {
            id: "slasher",
            icon: "⚡",
            name: "Slasher",
            description: "Gets to the rim whenever they want and finishes through anything"
        },
        sharpshooter: {
            id: "sharpshooter",
            icon: "🏹",
            name: "Sharpshooter",
            description: "Lights it up from deep the moment they cross half court"
        },
        lockdownDefender: {
            id: "lockdowndefender",
            icon: "🛡️",
            name: "Lockdown Defender",
            description: "Makes scoring look impossible when they're in your face"
        }
    },
    sg: {
        playmaker: {
            id: "playmaker",
            icon: "🎩",
            name: "Playmaker",
            description: "Not just a scorer but a floor reader who drops dimes with style"
        },
        shotcreator: {
            id: "shotcreator",
            icon: "🔥",
            name: "Shot Creator",
            description: "Pulls up from anywhere and makes something out of nothing"
        },
        slasher: {
            id: "slasher",
            icon: "💨",
            name: "Slasher",
            description: "Explodes past defenders and makes tough finishes look routine"
        },
        sharpshooter: {
            id: "sharpshooter",
            icon: "🎯",
            name: "Sharpshooter",
            description: "Has the green light from anywhere and makes it count every time"
        },
        lockdownDefender: {
            id: "lockdowndefender",
            icon: "🔒",
            name: "Lockdown Defender",
            description: "Turns offense into frustration and locks up the best in the game"
        }
    },
    sf: {
        playmaker: {
            id: "pointforward",
            icon: "🧠",
            name: "Point Forward",
            description: "Runs the offense with vision and makes teammates better every trip"
        },
        shotcreator: {
            id: "shotcreator",
            icon: "🎯",
            name: "Shot Creator",
            description: "Crafty scorer who makes defenders look lost no matter the coverage"
        },
        slasher: {
            id: "slasher",
            icon: "⚡",
            name: "Slasher",
            description: "Glides to the rim with power and grace like a walking highlight reel"
        },
        sharpshooter: {
            id: "sharpshooter",
            icon: "🏹",
            name: "Sharpshooter",
            description: "Pulls up with no hesitation and hits from everywhere on the court"
        },
        lockdownDefender: {
            id: "lockdowndefender",
            icon: "🛡️",
            name: "Lockdown Defender",
            description: "Takes the best player on the floor and erases them from the game"
        }
    },
    pf: {
        playmaker: {
            id: "pointforward",
            icon: "🎩",
            name: "Point Forward",
            description: "A big with handles and court vision who makes slick passes look easy"
        },
        shotcreator: {
            id: "shotcreator",
            icon: "🔥",
            name: "Shot Creator",
            description: "Creates space with ease and gets clean looks from mid or deep"
        },
        slasher: {
            id: "insidescorer",
            icon: "💪",
            name: "Inside Scorer",
            description: "Finishes through traffic and owns the paint with touch and power"
        },
        sharpshooter: {
            id: "stretchfour",
            icon: "🏹",
            name: "Stretch Four",
            description: "Makes defenders pay for giving even an inch beyond the arc"
        },
        lockdownDefender: {
            id: "rimprotector",
            icon: "🛡️",
            name: "Rim Protector",
            description: "Covers the paint like a wall and sends shots flying"
        }
    },
    c: {
        playmaker: {
            id: "glasscleaner",
            icon: "🧹",
            name: "Glass Cleaner",
            description: "Owns the boards and controls the tempo with second chances"
        },
        shotcreator: {
            id: "postscorer",
            icon: "🪵",
            name: "Post Scorer",
            description: "Gets deep position and makes defenders regret playing one on one"
        },
        slasher: {
            id: "interiorforce",
            icon: "🚧",
            name: "Interior Force",
            description: "Punishes defenders at the rim with strength and soft touch"
        },
        sharpshooter: {
            id: "stretchfive",
            icon: "🎯",
            name: "Stretch Five",
            description: "Drags bigs out the paint and drills shots like a guard"
        },
        lockdownDefender: {
            id: "defensiveanchor",
            icon: "🪨",
            name: "Defensive Anchor",
            description: "Commands the paint and shuts down everything near the rim"
        }
    }
};

let position = "pg"
const chosenArchetype = archetypes["pg"][Object.keys(archetypes["pg"]).at(0)].name;
console.log(chosenArchetype);
