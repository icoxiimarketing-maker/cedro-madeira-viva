import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { siteImages } from "@/lib/site-images";

const expectedPaths = {
  logo: "/images/cedro-logo-mark.png",
  hero: "/images/hero-kitchen.jpg",
  historia: "/images/historia-acabamento.jpg",
  closet: "/images/closet-grafite.jpg",
  cozinha: "/images/port-cozinha-cinza.jpg",
  dormitorio: "/images/port-dormitorio-ripado.jpg",
  painel: "/images/port-quarto-planejado.jpg",
  banheiro: "/images/banheiro-branco.jpg",
  homeOffice: "/images/home-office-ripado.jpg",
  corporativo: "/images/escritorio-corporativo.jpg",
  loja: "/images/loja-showroom.jpeg",
} as const;

// Checksums taken from the recovered originals before changing their references.
const originalHashes = [
  ["historia-acabamento.jpg", "d2e3dc63a95ff0dadbc34c24f78bbe1251cfd50c7f0ea3a671fcd2302a349a30"],
  ["closet-grafite.jpg", "d33157f565942b34cbb4331e9de5c89a8faef0bc0c4bf1cc466b9d1cb17675c1"],
  ["banheiro-branco.jpg", "70cd24ad7fade13cc08ed49cb1ffbb169da7ad2c5bd370bacffec2c9574f71da"],
  ["home-office-ripado.jpg", "fd6f5c85735cc6228558ee10004e84f06e8fa93afe2c7e82ebcd73430b54691c"],
  ["escritorio-corporativo.jpg", "736df2e24c10271dc363d96d313470969c03ddeb3d74cb8019b16e239cf8b34a"],
  ["loja-showroom.jpeg", "d65b7ca1d0106c103380062d3af83915de2dc23957826a5f5a1a08a7a73f490c"],
  ["port-cozinha-cinza.jpg", "1942afa0d8cee3fa57cd245033aac5fc0cd6d7144f89912fcc7863e860dda3a4"],
  ["port-dormitorio-ripado.jpg", "01b06e689055508c12cd0114aa144fe65899744d2d93ecbbd22745f694e1840f"],
  ["port-quarto-planejado.jpg", "cd10a1cbec5f9a2b028f2d15f2b154120b714eb5fb56ffc8819b85f37592fce6"],
  ["port-cozinha-azul.jpg", "d5c7c2bf2e316760e3c51b3a6cfbde68ae42b81cd3b98ec14d70436b05c38d63"],
  ["port-penteadeira.jpg", "c53739795a13f851be651409cc3859a6e783304c02b3f1ef0870499443665f36"],
  ["cedro-logo.png", "eac9e2de25fdaec900a6a4adb1d4c257e19f290689ab6a96ba1578391e91ff3a"],
] as const;

describe("Independent image hosting", () => {
  it.each(Object.entries(expectedPaths))("serves %s from its physical public file", (key, expected) => {
    const actual = Object.entries(siteImages).find(([name]) => name === key)?.[1];
    expect(actual).toBe(expected);
    const bytes = readFileSync(resolve(process.cwd(), `public${expected}`));
    expect(bytes.length).toBeGreaterThan(1000);
  });

  it.each(originalHashes)("preserves the recovered original bytes of %s", (filename, hash) => {
    const bytes = readFileSync(resolve(process.cwd(), "public/images", filename));
    expect(createHash("sha256").update(bytes).digest("hex")).toBe(hash);
  });

  it.each(["cedro-logo-mark.png", "hero-kitchen.jpg"])("preserves the existing %s exactly", (filename) => {
    expect(readFileSync(resolve(process.cwd(), "public/images", filename)))
      .toEqual(readFileSync(resolve(process.cwd(), "src/assets", filename)));
  });
});