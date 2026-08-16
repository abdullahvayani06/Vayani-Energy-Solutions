/**
 * Solar Savings Calculator — configuration
 *
 * All assumptions used by the calculator live in this file so they can be
 * updated by the business owner without touching component code. Figures
 * are planning estimates only, not a guaranteed quotation — the calculator
 * UI must always display the disclaimer in `calculatorDisclaimer` below.
 */

export type PropertyType = "Home" | "Commercial";
export type BackupLevel = "none" | "essential" | "extended" | "unsure";

export const calculatorAssumptions = {
  /** Approximate blended K-Electric tariff, PKR per unit (kWh), used only to
   * estimate monthly consumption from a monthly bill amount. */
  blendedTariffPerUnit: 55,

  /** Average usable solar generation, units (kWh) per installed kW per day,
   * for a typical unshaded Karachi rooftop. */
  solarYieldPerKwPerDay: 4.3,

  /** Portion of monthly consumption the recommended system is assumed to
   * offset, expressed as a fraction. Used to derive the savings range. */
  estimatedOffsetLow: 0.55,
  estimatedOffsetHigh: 0.8,

  /** Recommended system size bands, keyed by estimated monthly units. */
  systemBands: [
    { maxUnits: 350, sizeKw: 3, label: "3KW Hybrid Solar System" },
    { maxUnits: 500, sizeKw: 4.2, label: "4.2KW Hybrid Solar System" },
    { maxUnits: 750, sizeKw: 6, label: "6KW Hybrid Solar System" },
    { maxUnits: 1100, sizeKw: 8, label: "8KW Hybrid Solar System" },
    { maxUnits: 1500, sizeKw: 10, label: "10KW Hybrid Solar System" },
    { maxUnits: Infinity, sizeKw: 12, label: "Above 10KW Custom Hybrid System" },
  ],

  /** Backup requirement nudges the recommendation up one band when the
   * customer wants extended backup, since more battery/inverter headroom
   * is typically paired with a larger array. */
  backupUpgradeThreshold: "extended" as BackupLevel,
} as const;

export const calculatorDisclaimer =
  "Estimated figures only. Final system capacity depends on load analysis, consumption pattern, roof space, backup requirement and site survey.";

export type CalculatorResult = {
  monthlyUnits: number;
  recommendedSizeKw: number;
  recommendedLabel: string;
  estimatedMonthlySavingsLow: number;
  estimatedMonthlySavingsHigh: number;
  estimatedAnnualSavingsLow: number;
  estimatedAnnualSavingsHigh: number;
};

export function calculateSolarEstimate(
  monthlyBillPkr: number,
  backup: BackupLevel = "unsure"
): CalculatorResult {
  const { blendedTariffPerUnit, estimatedOffsetLow, estimatedOffsetHigh, systemBands } =
    calculatorAssumptions;

  const monthlyUnits = Math.round(monthlyBillPkr / blendedTariffPerUnit);

  let bandIndex = systemBands.findIndex((band) => monthlyUnits <= band.maxUnits);
  if (bandIndex === -1) bandIndex = systemBands.length - 1;

  if (backup === calculatorAssumptions.backupUpgradeThreshold && bandIndex < systemBands.length - 1) {
    bandIndex += 1;
  }

  const band = systemBands[bandIndex];

  const estimatedMonthlySavingsLow = Math.round(monthlyBillPkr * estimatedOffsetLow);
  const estimatedMonthlySavingsHigh = Math.round(monthlyBillPkr * estimatedOffsetHigh);

  return {
    monthlyUnits,
    recommendedSizeKw: band.sizeKw,
    recommendedLabel: band.label,
    estimatedMonthlySavingsLow,
    estimatedMonthlySavingsHigh,
    estimatedAnnualSavingsLow: estimatedMonthlySavingsLow * 12,
    estimatedAnnualSavingsHigh: estimatedMonthlySavingsHigh * 12,
  };
}
