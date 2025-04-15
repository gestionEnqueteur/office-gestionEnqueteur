import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

export interface VacationData {
  pds: string;
  vac: string;
  mission: string;
  semaine: string;
  typeJour: string;
  date: string;
  affectation: string;
  index: string;
  ligne: string;
  trainCourse: string;
  objectif: string;
  prQuota: string;
  hd: string;
  ha: string;
  depart: string;
  arrivee: string;
  commentaires: string;
  actions: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  convertExcelToJson(file: File): Promise<VacationData[]> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        try {
          const binaryStr = e.target?.result;
          if (typeof binaryStr !== 'string' && !(binaryStr instanceof ArrayBuffer)) {
            throw new Error('Format de fichier non supporté');
          }

          const workbook = XLSX.read(binaryStr, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];

          const jsonData = XLSX.utils.sheet_to_json<(string | number)[]>(worksheet, { header: 1 });

          const headers = jsonData[0] as string[];
          const rows = jsonData.slice(1).map((row): VacationData => {
            const obj = {} as VacationData;

            headers.forEach((header, index) => {
              (obj as any)[header] = row[index]; // Une micro-astuce tolérée ici
            });

            return obj;
          });

          resolve(rows);
        } catch (error) {
          reject(error);
        }
      };

      reader.onerror = (error) => reject(error);
      reader.readAsArrayBuffer(file);
    });
  }
}
