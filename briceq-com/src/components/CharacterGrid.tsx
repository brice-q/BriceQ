import { useState, useEffect } from "react";

interface Character {
    name: string;
    realm: string;
    region: string;
}

interface GearItem {
    name: string;
    item_level: number;
    icon: string;
}

interface CharacterData {
    name: string;
    race: string;
    class: string;
    gear: {
        items: Record<string, GearItem>;
    };
}

const characters: Character[] = [
    { name: "Bricepr", realm: "Illidan", region: "us" },
    { name: "Jeefo", realm: "Illidan", region: "us" },
    { name: "Spookytree", realm: "Illidan", region: "us" },
    { name: "Djiinar", realm: "Ravenholdt", region: "us" },
    { name: "Zootie", realm: "Thrall", region: "us" },
  ];

function Dialog({ open, onOpenChange, children }: { open: boolean; onOpenChange: () => void; children: React.ReactNode }) {
    return open ? (
        <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-[50rem] max-h-[80vh] overflow-y-auto relative">
                <button onClick={onOpenChange} className="absolute top-3 right-3 text-gray-700 text-xl font-bold">&times;</button>
                {children}
            </div>
        </div>
    ) : null;
}

function Card({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
    return (
        <div className={`border p-3 rounded-lg shadow-md mt-4 cursor-pointer ${className}`} onClick={onClick}>
            {children}
        </div>
    );
}

export default function CharacterGrid() {
    const [characterData, setCharacterData] = useState<CharacterData[]>([]);
    const [selectedCharacter, setSelectedCharacter] = useState<CharacterData | null>(null);

    useEffect(() => {
        async function fetchCharacters() {
            const data = await Promise.all(
                characters.map(async (char) => {
                    const response = await fetch(
                        `https://raider.io/api/v1/characters/profile?region=${char.region}&realm=${char.realm}&name=${char.name}&fields=gear`
                    );
                    return response.json() as Promise<CharacterData>;
                })
            );
            setCharacterData(data);
        }
        fetchCharacters();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            {characterData.map((char) => (
                <Card key={char.name} className="p-4" onClick={() => setSelectedCharacter(char)}>
                    <h2 className="text-xl font-bold">{char.name}</h2>
                    <p className="text-gray-500">{char.race} {char.class}</p>
                </Card>
            ))}
            {selectedCharacter && (
                <Dialog open={true} onOpenChange={() => setSelectedCharacter(null)}>
                    <h2 className="text-xxl font-bold text-center mb-2">{selectedCharacter.name} ({selectedCharacter.race}) - Gear</h2>
                    <div className="grid grid-cols-2 gap-4 p-4 max-h-[60vh] overflow-y-auto">
                        {selectedCharacter.gear.items &&
                            Object.entries(selectedCharacter.gear.items).map(([slot, item]) => (
                                <div key={slot} className="p-2 border rounded-lg shadow-sm bg-gray-100 flex items-center gap-3">
                                    <img src={`https://render.worldofwarcraft.com/us/icons/56/${item.icon}.jpg`} alt={item.name} className="w-12 h-12 rounded-md border" />
                                    <div>
                                        {/* <p className="font-bold">{slot.replace("_", " ")}</p> */}
                                        <p>{item.name}</p>
                                        <p className="text-sm text-gray-500">Item Level: {item.item_level}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </Dialog>
            )}
        </div>
    );
}
