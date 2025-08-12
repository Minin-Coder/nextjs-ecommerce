"use client";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@mui/material";

import { MoonIcon, SunIcon, SunMoon } from "lucide-react";

import { useTheme } from "next-themes";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="Ghost"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {theme === "system" ? (
            <SunMoon />
          ) : theme === "dark" ? (
            <MoonIcon />
          ) : (
            <SunIcon />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dropdown-content">
        <DropdownMenuLabel className="dropdown-label">
          <b>Appearance</b>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="dropdown-separator" />
        <DropdownMenuCheckboxItem
          className="dropdown-checkbox-item"
          checked={theme === "system"}
          onClick={() => setTheme("system")}
        >
          <span>System</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="dropdown-checkbox-item"
          checked={theme === "dark"}
          onClick={() => setTheme("dark")}
        >
          <span>Dark</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="dropdown-checkbox-item"
          checked={theme === "light"}
          onClick={() => setTheme("light")}
        >
          <span>Light</span>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
