import * as XLSX from 'xlsx';

//  Convertir un nombre Excel (ex: 0.54321) en "HH:mm"
export function excelTimeToString(time: number): string {
  const totalMinutes = Math.round(time * 24 * 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

// Convertir une date Excel (ex: 45123) en "YYYY-MM-DD"
export function excelDateToString(dateCode: number): string {
  const parsed = XLSX.SSF.parse_date_code(dateCode);
  if (!parsed) return String(dateCode);
  const date = new Date(parsed.y, parsed.m - 1, parsed.d);
  return date.toISOString().split('T')[0];
}
