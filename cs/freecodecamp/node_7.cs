// This is a simple scoring system that could use some more automation.

using System;

namespace EstudiantesCalificaciones
{
    class Program
    {
        static void Main(string[] args)
        {

            int sum = 0;
            int[] total = new int[4];

            decimal assignments = 5m;
            int[][] Scores = new int[4][];
            Scores[0] = new int[] { 93, 87, 98, 95, 100 };
            Scores[1] = new int[] { 80, 83, 82, 88, 85 };
            Scores[2] = new int[] { 84, 96, 73, 85, 79 };
            Scores[3] = new int[] { 90, 92, 98, 100, 97 };

            for (int i = 0; i < Scores.Length; i++)
            {
                sum = 0;
                for (int j = 0; j < Scores[i].Length; j++)
                {
                    sum += Scores[i][j];
                }
                total[i] = sum;
            }

            Console.WriteLine($"Student\t\tGrade\nSophia\t\t{(decimal)total[0] / assignments}\t  A\nNicolas\t\t{(decimal)total[1] / assignments}\t  B\nZahirah\t\t{(decimal)total[2] / assignments}\t  B\nJeong\t\t{(decimal)total[3] / assignments}\t  A");
        }
    }
}