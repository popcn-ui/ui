"use client"

import { Typography } from "@/components/ui/typography"

export function TypographyDemo() {
  return (
    <div className="space-y-6">
      <Typography variant="h1">
        Taxing Laughter: The Joke Tax Chronicles
      </Typography>
      <Typography variant="lead">
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </Typography>
      <Typography variant="h2">
        The King&apos;s Plan
      </Typography>
      <Typography variant="p">
        The king thought long and hard, and finally came up with{" "}
        <a
          href="#"
          className="text-primary font-medium underline underline-offset-4"
        >
          a brilliant plan
        </a>
        : he would tax the jokes in the kingdom.
      </Typography>
      <Typography variant="blockquote">
        &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
        it&apos;s only fair that they should pay for the privilege.&quot;
      </Typography>
      <Typography variant="h3">
        The Joke Tax
      </Typography>
      <Typography variant="p">
        The king&apos;s subjects were not amused. They grumbled and complained,
        but the king was firm:
      </Typography>
      <Typography variant="list" as="ul">
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </Typography>
      <Typography variant="p">
        As a result, people stopped telling jokes, and the kingdom fell into a
        gloom. But there was one person who refused to let the king&apos;s
        foolishness get him down: a court jester named Jokester.
      </Typography>
      <Typography variant="h3">
        Jokester&apos;s Revolt
      </Typography>
      <Typography variant="p">
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king&apos;s pillow, in his
        soup, even in the royal toilet. The king was furious, but he
        couldn&apos;t seem to stop Jokester.
      </Typography>
      <Typography variant="p">
        And then, one day, the people of the kingdom discovered that the jokes
        left by Jokester were so funny that they couldn&apos;t help but laugh.
        And once they started laughing, they couldn&apos;t stop.
      </Typography>
      <Typography variant="h3">
        The People&apos;s Rebellion
      </Typography>
      <Typography variant="p">
        The people of the kingdom, feeling uplifted by the laughter, started to
        tell jokes and puns again, and soon the entire kingdom was in on the
        joke.
      </Typography>
      <div className="my-6 w-full overflow-y-auto">
        <Typography variant="table" as="table">
          <thead>
            <tr className="even:bg-muted m-0 border-t p-0">
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                King&apos;s Treasury
              </th>
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                People&apos;s happiness
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-muted m-0 border-t p-0">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Empty
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Overflowing
              </td>
            </tr>
            <tr className="even:bg-muted m-0 border-t p-0">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Modest
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Satisfied
              </td>
            </tr>
            <tr className="even:bg-muted m-0 border-t p-0">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Full
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Ecstatic
              </td>
            </tr>
          </tbody>
        </Typography>
      </div>
      <Typography variant="p">
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax. Jokester was declared a hero, and
        the kingdom lived happily ever after.
      </Typography>
      <Typography variant="p">
        The moral of the story is: never underestimate the power of a good laugh
        and always be careful of bad ideas.
      </Typography>
      <div className="mt-8 space-y-2">
        <Typography variant="large">Large text</Typography>
        <Typography variant="small">Small text</Typography>
        <Typography variant="muted">Muted text</Typography>
        <Typography variant="p">
          Inline <Typography variant="inline-code" as="code">code</Typography> example
        </Typography>
      </div>
    </div>
  )
}
