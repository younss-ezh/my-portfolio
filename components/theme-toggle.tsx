"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

import { Button } from "./ui/button"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

export default function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) return null

    return (
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
        }}
      >
        {resolvedTheme === "light" ? (
          <MoonIcon className="size-4 text-sky-450" />
        ) : (
          <SunIcon className="size-4 text-orange-300" />
        )}

        <span className="sr-only">Toggle Theme</span>
      </Button>
    );
}