import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { excelTimeToString, excelDateToString } from '../shared/excel-helper';

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
          // Récupère le résultat de la lecture du fichier (peut être string ou ArrayBuffer)
          const binaryStr = e.target?.result;

          // on verif le format
          if (typeof binaryStr !== 'string' && !(binaryStr instanceof ArrayBuffer)) {
            throw new Error('Format de fichier non supporté');
          }

          // Lit le fichier Excel (XLSX) en tant que "binary"
          const workbook = XLSX.read(binaryStr, { type: 'binary' });

          // On prend la première feuille (sheet) du fichier
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];

           // On convertit la feuille en tableau de lignes (chaque ligne est un tableau)
          const jsonData = XLSX.utils.sheet_to_json<(string | number)[]>(worksheet, { header: 1 });

          // Première ligne = en-têtes des colonnes (headers)
          const headers = jsonData[0] as string[];

          // Pour chaque ligne suivante (chaque ligne représente une vacation)
          const rows = jsonData.slice(1).map((row): VacationData => {
            const obj = {} as VacationData;

            headers.forEach((header, index) => {
              (obj as any)[header] = row[index];   // on attribue la valeur à la clé correspondante
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
