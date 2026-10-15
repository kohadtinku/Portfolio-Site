import { Stack, IconButton } from "@mui/material";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const items = [
  { label: "GitHub", href: profile.github, Icon: Github },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
];

export default function SocialLinks({ size = 20 }) {
  return (
    <Stack direction="row" spacing={0.5}>
      {items.map(({ label, href, Icon }) => (
        <IconButton key={label} component="a" href={href} aria-label={label} color="inherit"
          target={label === "Email" ? undefined : "_blank"} rel="noopener noreferrer">
          <Icon size={size} />
        </IconButton>
      ))}
    </Stack>
  );
}
