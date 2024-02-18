const bioms = ['water', 'deepWater', 'forest', 'desert', 'meadow', 'rocks', 'snow'] as const;

type TBiom = (typeof bioms)[number];

export const biomColor: Record<TBiom, string> = {
    deepWater: '#000DC9',
    water: '#2F6EFF',
    desert: '#FCD200',
    forest: '#008A1C',
    meadow: '#50DA59',
    rocks: '#AFAFAF',
    snow: '#fff',
};

export const hexs: TBiom[][] = [
    [
        'water',
        'water',
        'deepWater',
        'deepWater',
        'deepWater',
        'deepWater',
        'water',
        'water',
        'water',
        'deepWater',
        'meadow',
        'snow',
        'meadow',
        'deepWater',
        'water',
        'deepWater',
        'water',
        'desert',
        'forest',
        'snow',
        'deepWater',
        'deepWater',
        'water',
        'water',
        'water',
        'water',
        'deepWater',
        'water',
        'deepWater',
        'rocks',
        'deepWater',
        'deepWater',
        'water',
        'deepWater',
        'forest',
        'rocks',
        'desert',
    ],
    [
        'deepWater',
        'forest',
        'water',
        'deepWater',
        'deepWater',
        'water',
        'rocks',
        'desert',
        'deepWater',
        'deepWater',
        'deepWater',
        'water',
        'snow',
        'deepWater',
        'water',
        'deepWater',
        'deepWater',
        'water',
        'water',
        'deepWater',
        'deepWater',
        'snow',
        'deepWater',
        'desert',
        'meadow',
        'water',
        'deepWater',
        'forest',
        'water',
        'water',
        'snow',
        'deepWater',
        'meadow',
        'water',
        'rocks',
        'water',
        'water',
    ],
    [
        'water',
        'forest',
        'deepWater',
        'water',
        'deepWater',
        'water',
        'desert',
        'water',
        'water',
        'deepWater',
        'deepWater',
        'deepWater',
        'rocks',
        'meadow',
        'snow',
        'water',
        'water',
        'deepWater',
        'deepWater',
        'deepWater',
        'water',
        'water',
        'forest',
        'desert',
        'meadow',
        'deepWater',
        'deepWater',
        'deepWater',
        'deepWater',
        'rocks',
        'forest',
        'water',
        'deepWater',
        'water',
        'water',
        'snow',
        'water',
    ],
    [
        'water',
        'deepWater',
        'water',
        'water',
        'snow',
        'deepWater',
        'deepWater',
        'forest',
        'deepWater',
        'meadow',
        'rocks',
        'deepWater',
        'rocks',
        'deepWater',
        'water',
        'deepWater',
        'water',
        'water',
        'water',
        'water',
        'deepWater',
        'water',
        'deepWater',
        'water',
        'water',
        'water',
        'snow',
        'desert',
        'deepWater',
        'meadow',
        'forest',
        'desert',
        'deepWater',
        'deepWater',
        'water',
        'deepWater',
        'water',
    ],
    [
        'water',
        'desert',
        'meadow',
        'water',
        'deepWater',
        'forest',
        'water',
        'rocks',
        'water',
        'water',
        'deepWater',
        'snow',
        'meadow',
        'water',
        'deepWater',
        'deepWater',
        'deepWater',
        'water',
        'deepWater',
        'water',
        'water',
        'deepWater',
        'water',
        'water',
        'forest',
        'desert',
        'deepWater',
        'water',
        'deepWater',
        'rocks',
        'water',
        'deepWater',
        'water',
        'deepWater',
        'deepWater',
        'deepWater',
        'water',
    ],
    [
        'water',
        'deepWater',
        'water',
        'deepWater',
        'water',
        'meadow',
        'deepWater',
        'water',
        'water',
        'deepWater',
        'rocks',
        'forest',
        'deepWater',
        'snow',
        'water',
        'deepWater',
        'forest',
        'water',
        'deepWater',
        'water',
        'rocks',
        'deepWater',
        'water',
        'snow',
        'deepWater',
        'water',
        'deepWater',
        'desert',
        'deepWater',
        'water',
        'deepWater',
        'desert',
        'meadow',
        'deepWater',
        'water',
        'water',
        'deepWater',
    ],
    [
        'water',
        'water',
        'snow',
        'forest',
        'deepWater',
        'rocks',
        'desert',
        'water',
        'deepWater',
        'water',
        'deepWater',
        'deepWater',
        'water',
        'deepWater',
        'water',
        'deepWater',
        'water',
        'water',
        'water',
        'deepWater',
        'rocks',
        'water',
        'deepWater',
        'water',
        'desert',
        'deepWater',
        'deepWater',
        'water',
        'deepWater',
        'deepWater',
        'rocks',
        'meadow',
        'water',
        'meadow',
        'snow',
        'deepWater',
        'water',
    ],
];