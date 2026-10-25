import WellMagic from "../assets/WellMagic.jpeg";
import MajuBarengAi from "../assets/MajuBarengAi.jpeg";
import Cisco from "../assets/Cisco.jpeg";
export type Certificate = {
    slug: string;
    name: string;
    issuer: string;
    year: string;
    url?: string;
    image: string;
};
export const certificates: Certificate[] = [
    {
        slug: "kelas-industri-batch-1",
        name: "Kelas Industri Batch 1",
        issuer: "WellMagic",
        year: "2024",
        image: WellMagic,
    },
    {
        slug: "iot-essentials",
        name: "Sertifikat Penyelesaian IoT",
        issuer: "Cisco",
        year: "2026",
        image: Cisco,
    },
    {
        slug: "ai-productivity-api-integration",
        name: "AI Productivity & AI API Integration for Developer",
        issuer: "Hacktiv8",
        year: "2026",
        image: MajuBarengAi,
    },
];
