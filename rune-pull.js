document.addEventListener("DOMContentLoaded", function () {
    const runes = [
        { name: "Fehu", meaning: "Wealth, prosperity, abundance" },
        { name: "Uruz", meaning: "Strength, endurance, health" },
        { name: "Thurisaz", meaning: "Conflict, defense, reactive force" },
        { name: "Ansuz", meaning: "Communication, wisdom, inspiration" },
        { name: "Raidho", meaning: "Journey, movement, travel" },
        { name: "Kenaz", meaning: "Knowledge, enlightenment, creativity" },
        { name: "Gebo", meaning: "Gift, partnership, generosity" },
        { name: "Wunjo", meaning: "Joy, harmony, success" },
        { name: "Hagalaz", meaning: "Disruption, change, transformation" },
        { name: "Nauthiz", meaning: "Need, restriction, resistance" },
        { name: "Isa", meaning: "Stillness, patience, introspection" },
        { name: "Jera", meaning: "Harvest, reward, natural cycles" },
        { name: "Eihwaz", meaning: "Endurance, resilience, protection" },
        { name: "Perthro", meaning: "Mystery, fate, the unknown" },
        { name: "Algiz", meaning: "Protection, guidance, higher self" },
        { name: "Sowilo", meaning: "Success, vitality, illumination" },
        { name: "Tiwaz", meaning: "Justice, leadership, honor" },
        { name: "Berkano", meaning: "Growth, renewal, fertility" },
        { name: "Ehwaz", meaning: "Trust, teamwork, progress" },
        { name: "Mannaz", meaning: "Humanity, intelligence, awareness" },
        { name: "Laguz", meaning: "Flow, intuition, emotions" },
        { name: "Ingwaz", meaning: "Potential, inner strength, gestation" },
        { name: "Dagaz", meaning: "Breakthrough, awakening, clarity" },
        { name: "Othala", meaning: "Heritage, inheritance, legacy" }
    ];

    document.getElementById("runeButton").addEventListener("click", function () {
        const randomRune = runes[Math.floor(Math.random() * runes.length)];
        document.getElementById("runeName").textContent = randomRune.name;
        document.getElementById("runeMeaning").textContent = randomRune.meaning;
        document.getElementById("runeCard").style.display = "block";
    });
});
