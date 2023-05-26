import { type NextApiRequest, type NextApiResponse } from "next";

// 10x25 grid of all 000000
const grid = [
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000']
]

const ftlAppUpdate = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(grid);
};

export default ftlAppUpdate;
