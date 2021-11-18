using System;
using System.Collections.Generic;

namespace csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> insults = new List<string>
            {
                "You look like what morning breath smells like.",
                "If you tried to give me cpr I would probably throw myself back under water",
                "I am not a fan of you",
                "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
                "I'd rather walk than be on the same plane as you",
                "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
                "Do you have to be so...like that?"
            };

            List<string> indexes = new List<string>
            {

            };
            while (indexes.Length() < 3)
            {
                var candidate = getRandomInt(0, insults.Length() - 1);
                if (!indexes.includes(candidate))
                {
                    indexes.Add(candidate);
                }
            }

            for (var i = 0; i < indexes.length; i++)
            {
                var index = indexes[i];
                Console.WriteLine(insults[index]);
            }
        }

        void getRandomInt(int min, int max)
        {
            min = Math.Ceiling(min);
            max = Math.Floor(max);
            return Random = new Random().Next(max - min + 1);
        }
    }
}
