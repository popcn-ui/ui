"use client"

import { useState } from "react"
import {
  Heart, MessageCircle, Send, Play, Pause, SkipBack, SkipForward,
  Volume2, MapPin, Bell, Check, X, Plus, Trash2, Star,
  Music, User, Image, Smile, MoreHorizontal, Share2,
  Search, Compass, Bookmark, Clock, TrendingUp, Globe,
  Cloud, Sun, CloudRain, CloudSnow, Wind, Droplets, Thermometer,
  UserCheck, Settings, Camera, Tag as TagIcon, Shield,
  Folder, FolderOpen, File, FileText, FileImage, FileCode, HardDrive, Grid, List,
  Plane, PlaneTakeoff, PlaneLanding, Wifi,
  Command, ArrowRight, Zap, Layout, Code, Palette, Terminal
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tag } from "@/components/ui/tag"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

// ============================================
// Message Chat Block
// ============================================
function MessageBlock() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey! Check out this new animation system", sender: "other", time: "10:30" },
    { id: 2, text: "The bounce effect is so satisfying!", sender: "me", time: "10:31" },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [liked, setLiked] = useState<number[]>([])

  const sendMessage = () => {
    if (!newMessage.trim()) return
    setMessages([...messages, {
      id: Date.now(),
      text: newMessage,
      sender: "me",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }])
    setNewMessage("")
  }

  const toggleLike = (id: number) => {
    setLiked(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  return (
    <Card variant="glass" className="max-w-md">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <Avatar className="ap-hover-scale">
            <AvatarImage src="https://i.pravatar.cc/40?img=1" />
            <AvatarFallback>YT</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-base">Yuki Tanaka</CardTitle>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
          <Button variant="ghost" size="sm" motion="pop">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={msg.id}
              className={cn(
                "flex gap-2 ap-enter-slide",
                msg.sender === "me" ? "flex-row-reverse" : ""
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-2 ap-hover-scale",
                  msg.sender === "me"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                <p className="text-sm">{msg.text}</p>
                <div className="flex items-center justify-end gap-2 mt-1">
                  <span className="text-[10px] opacity-70">{msg.time}</span>
                  <button
                    onClick={() => toggleLike(msg.id)}
                    className="ap-active-squish"
                  >
                    <Heart
                      className={cn(
                        "h-3 w-3 transition-all",
                        liked.includes(msg.id)
                          ? "fill-red-500 text-red-500 animate-ap-bounce"
                          : "opacity-50"
                      )}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <Input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1"
          />
          <Button variant="aurora" size="sm" motion="bounce" onClick={sendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// ============================================
// Music Player Block
// ============================================
function MusicPlayerBlock() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(35)
  const [liked, setLiked] = useState(false)

  return (
    <Card variant="aurora" className="max-w-sm overflow-hidden">
      <div className="relative aspect-square bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={cn(
            "w-48 h-48 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center",
            isPlaying && "animate-[spin_8s_linear_infinite]"
          )}>
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center">
              <Music className="h-16 w-16 text-white/80" />
            </div>
          </div>
        </div>
        {isPlaying && (
          <>
            <div className="absolute top-4 left-4 ap-pulse-ring w-3 h-3 rounded-full bg-white" />
            <div className="absolute top-6 right-6 ap-pulse-ring w-2 h-2 rounded-full bg-white" style={{ animationDelay: "200ms" }} />
            <div className="absolute bottom-8 left-8 ap-pulse-ring w-2 h-2 rounded-full bg-white" style={{ animationDelay: "400ms" }} />
          </>
        )}
      </div>
      <CardContent className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Aurora Dreams</h3>
            <p className="text-sm text-muted-foreground">Cosmic Beats</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            motion="bounce"
            onClick={() => setLiked(!liked)}
          >
            <Heart className={cn(
              "h-5 w-5 transition-all",
              liked ? "fill-red-500 text-red-500" : ""
            )} />
          </Button>
        </div>

        {/* Progress bar */}
        <div className="space-y-1">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300 ease-ap-soft"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1:24</span>
            <span>3:45</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <Button variant="ghost" size="sm" motion="pop">
            <SkipBack className="h-5 w-5" />
          </Button>
          <Button
            variant="aurora"
            size="lg"
            motionClick="jelly"
            className="rounded-full w-14 h-14 p-0"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="h-8 w-8 shrink-0" />
            ) : (
              <Play className="h-8 w-8 shrink-0 ml-0.5" />
            )}
          </Button>
          <Button variant="ghost" size="sm" motion="pop">
            <SkipForward className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// ============================================
// Notification Stack Block
// ============================================
function NotificationBlock() {
  const [notifications, setNotifications] = useState([
    { id: 1, title: "New message", desc: "Yuki sent you a message", icon: MessageCircle, time: "2m ago" },
    { id: 2, title: "Task completed", desc: "Project review is done", icon: Check, time: "5m ago" },
    { id: 3, title: "New follower", desc: "@cosmic_dev started following you", icon: User, time: "1h ago" },
  ])

  const dismissNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  const addNotification = () => {
    const newNotif = {
      id: Date.now(),
      title: "New notification",
      desc: "Something exciting happened!",
      icon: Bell,
      time: "Just now"
    }
    setNotifications(prev => [newNotif, ...prev])
  }

  return (
    <Card variant="glass" className="max-w-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </CardTitle>
          <Button variant="ghost" size="sm" motion="pop" onClick={addNotification}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {notifications.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-4">
            No notifications
          </p>
        ) : (
          notifications.map((notif, index) => (
            <div
              key={notif.id}
              className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 ap-enter-slide ap-hover-scale group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-2 rounded-full bg-primary/20">
                <notif.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{notif.title}</p>
                <p className="text-xs text-muted-foreground truncate">{notif.desc}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{notif.time}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                motion="wiggle"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => dismissNotification(notif.id)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  )
}

// ============================================
// Location Card Block
// ============================================
function LocationBlock() {
  const [saved, setSaved] = useState(false)
  const [rating, setRating] = useState(0)

  return (
    <Card variant="glass" motion="float" className="max-w-sm overflow-hidden">
      <div className="relative h-40 bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-400">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="ap-enter-bounce">
            <MapPin className="h-12 w-12 text-white drop-shadow-lg" />
          </div>
        </div>
        <Badge variant="secondary" className="absolute top-3 right-3 ap-enter-pop">
          2.4 km away
        </Badge>
      </div>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold">Aurora Cafe</h3>
            <p className="text-sm text-muted-foreground">123 Cosmic Street, Tokyo</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            motion="bounce"
            onClick={() => setSaved(!saved)}
          >
            <Star className={cn(
              "h-5 w-5 transition-all",
              saved ? "fill-yellow-500 text-yellow-500" : ""
            )} />
          </Button>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className="ap-active-squish"
            >
              <Star
                className={cn(
                  "h-4 w-4 transition-all",
                  star <= rating
                    ? "fill-yellow-500 text-yellow-500 animate-ap-pop"
                    : "text-muted-foreground"
                )}
              />
            </button>
          ))}
          <span className="text-sm text-muted-foreground ml-2">(128 reviews)</span>
        </div>

        <div className="flex gap-2">
          <Button variant="aurora" className="flex-1" motion="jelly">
            <MapPin className="h-4 w-4 mr-2" />
            Directions
          </Button>
          <Button variant="glass" motion="pop">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// ============================================
// Todo List Block
// ============================================
function TodoBlock() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Review animation system", done: true },
    { id: 2, text: "Add bounce effects", done: false },
    { id: 3, text: "Test reduced motion", done: false },
  ])
  const [newTodo, setNewTodo] = useState("")

  const addTodo = () => {
    if (!newTodo.trim()) return
    setTodos([...todos, { id: Date.now(), text: newTodo, done: false }])
    setNewTodo("")
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <Card variant="glass" className="max-w-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Today&apos;s Tasks</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          {todos.map((todo, index) => (
            <div
              key={todo.id}
              className={cn(
                "flex items-center gap-3 p-3 rounded-lg bg-muted/30 ap-enter-slide group",
                todo.done && "opacity-60"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Checkbox
                checked={todo.done}
                onCheckedChange={() => toggleTodo(todo.id)}
              />
              <span className={cn(
                "flex-1 text-sm transition-all",
                todo.done && "line-through"
              )}>
                {todo.text}
              </span>
              <Button
                variant="ghost"
                size="sm"
                motion="wiggle"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => deleteTodo(todo.id)}
              >
                <Trash2 className="h-3 w-3 text-red-500" />
              </Button>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <Input
            placeholder="Add a task..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            className="flex-1"
          />
          <Button variant="aurora" size="sm" motion="bounce" onClick={addTodo}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// ============================================
// Social Post Block
// ============================================
function SocialPostBlock() {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(42)

  const handleLike = () => {
    setLiked(!liked)
    setLikeCount(prev => liked ? prev - 1 : prev + 1)
  }

  return (
    <Card variant="glass" className="max-w-md">
      <CardContent className="p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Avatar className="ap-hover-scale">
            <AvatarImage src="https://i.pravatar.cc/40?img=3" />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium">Aiko Kimura</p>
            <p className="text-xs text-muted-foreground">2 hours ago</p>
          </div>
          <Button variant="ghost" size="sm" motion="pop">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <p className="text-sm">
          Just discovered this amazing animation library! The jelly effect is so satisfying
        </p>

        {/* Image */}
        <div className="rounded-lg overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 aspect-video flex items-center justify-center ap-hover-scale">
          <Image className="h-12 w-12 text-white/50" />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-2 border-t border-border/50">
          <Button
            variant="ghost"
            size="sm"
            motion="bounce"
            onClick={handleLike}
            className="gap-2"
          >
            <Heart className={cn(
              "h-4 w-4 transition-all",
              liked && "fill-red-500 text-red-500"
            )} />
            <span>{likeCount}</span>
          </Button>
          <Button variant="ghost" size="sm" motion="pop" className="gap-2">
            <MessageCircle className="h-4 w-4" />
            <span>12</span>
          </Button>
          <Button variant="ghost" size="sm" motion="pop" className="gap-2">
            <Share2 className="h-4 w-4" />
          </Button>
          <div className="flex-1" />
          <Button variant="ghost" size="sm" motion="pop">
            <Smile className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// ============================================
// Interactive Map Block
// ============================================
function InteractiveMapBlock() {
  const [selectedPin, setSelectedPin] = useState<number | null>(null)
  const [savedPins, setSavedPins] = useState<number[]>([])

  const pins = [
    { id: 1, name: "Aurora Tower", desc: "Landmark observation deck with 360° views", category: "Landmark", x: 28, y: 35 },
    { id: 2, name: "Cosmic Garden", desc: "Botanical garden with rare night-blooming flowers", category: "Nature", x: 62, y: 55 },
    { id: 3, name: "Neon District", desc: "Entertainment hub with live performances", category: "Entertainment", x: 75, y: 25 },
  ]

  const toggleSave = (id: number) => {
    setSavedPins(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id])
  }

  const selected = pins.find(p => p.id === selectedPin)

  return (
    <Card variant="glass" className="max-w-lg overflow-hidden">
      <CardContent className="p-0">
        {/* Map area */}
        <div
          className="relative h-72 cursor-crosshair overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse at 30% 40%, rgba(var(--ap-aurora-1), 0.4) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 60%, rgba(var(--ap-aurora-2), 0.3) 0%, transparent 45%),
              radial-gradient(ellipse at 50% 80%, rgba(var(--ap-aurora-3), 0.3) 0%, transparent 40%),
              radial-gradient(ellipse at 20% 70%, rgba(var(--ap-primary), 0.15) 0%, transparent 50%),
              linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--card)) 100%)
            `,
          }}
          onClick={() => setSelectedPin(null)}
        >
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Pins */}
          {pins.map(pin => (
            <button
              key={pin.id}
              className={cn(
                "absolute -translate-x-1/2 -translate-y-full ap-hover-float transition-all",
                selectedPin === pin.id && "scale-125"
              )}
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              onClick={(e) => { e.stopPropagation(); setSelectedPin(pin.id) }}
            >
              <div className="relative">
                {selectedPin === pin.id && (
                  <div className="absolute inset-0 -m-2 ap-pulse-ring rounded-full" />
                )}
                <MapPin className={cn(
                  "h-8 w-8 drop-shadow-lg transition-colors",
                  selectedPin === pin.id ? "text-primary fill-primary/30" : "text-primary/70"
                )} />
              </div>
            </button>
          ))}

          {/* Saved count */}
          <Badge variant="glass" glow className="absolute top-3 left-3 ap-enter-pop">
            <Bookmark className="h-3 w-3 mr-1" />
            {savedPins.length} saved
          </Badge>
        </div>

        {/* Detail panel */}
        {selected ? (
          <div className="p-4 space-y-3 ap-enter-pop">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-aurora">{selected.name}</h3>
                <p className="text-sm text-muted-foreground">{selected.desc}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                motion="bounce"
                onClick={() => toggleSave(selected.id)}
              >
                <Bookmark className={cn(
                  "h-4 w-4 transition-all",
                  savedPins.includes(selected.id) ? "fill-primary text-primary" : ""
                )} />
              </Button>
            </div>
            <div className="flex gap-2">
              <Badge glow>{selected.category}</Badge>
              <Badge variant="outline">Open now</Badge>
            </div>
            <Button variant="aurora" className="w-full" motion="jelly">
              <Compass className="h-4 w-4 mr-2" />
              Navigate
            </Button>
          </div>
        ) : (
          <div className="p-4 text-center text-sm text-muted-foreground">
            Click a pin to view details
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// ============================================
// Navigation Dashboard Block
// ============================================
function NavigationDashboardBlock() {
  const [searchQuery, setSearchQuery] = useState("")
  const [pinnedItems, setPinnedItems] = useState<string[]>(["Dashboard", "Settings"])

  const navItems = [
    { title: "Dashboard", desc: "Overview & analytics", icon: Layout, color: "from-indigo-500 to-purple-500" },
    { title: "Projects", desc: "Manage your work", icon: Code, color: "from-pink-500 to-rose-500" },
    { title: "Design System", desc: "Components & tokens", icon: Palette, color: "from-amber-500 to-orange-500" },
    { title: "Terminal", desc: "Command line access", icon: Terminal, color: "from-emerald-500 to-teal-500" },
  ]

  const togglePin = (title: string) => {
    setPinnedItems(prev => prev.includes(title) ? prev.filter(i => i !== title) : [...prev, title])
  }

  const filtered = navItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Card variant="glass" className="max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Compass className="h-4 w-4" />
          Command Center
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Search */}
        <div className="relative shine-effect rounded-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search navigation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="favorites">
          <TabsList variant="aurora" className="w-full">
            <TabsTrigger variant="aurora" value="favorites" className="flex-1">
              <Star className="h-3 w-3 mr-1" />
              Favorites
            </TabsTrigger>
            <TabsTrigger variant="aurora" value="recent" className="flex-1">
              <Clock className="h-3 w-3 mr-1" />
              Recent
            </TabsTrigger>
            <TabsTrigger variant="aurora" value="explore" className="flex-1">
              <Globe className="h-3 w-3 mr-1" />
              Explore
            </TabsTrigger>
          </TabsList>

          <TabsContent value="favorites" className="mt-3">
            <div className="grid grid-cols-2 gap-3">
              {filtered.filter(i => pinnedItems.includes(i.title)).map((item, index) => (
                <Card
                  key={item.title}
                  variant="glass"
                  motion="tilt"
                  className="ap-enter-slide ap-hover-glow cursor-pointer"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardContent className="p-3 space-y-2">
                    <div className={cn("w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center", item.color)}>
                      <item.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {filtered.filter(i => pinnedItems.includes(i.title)).length === 0 && (
                <p className="col-span-2 text-sm text-muted-foreground text-center py-4">No favorites yet</p>
              )}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-3">
            <div className="grid grid-cols-2 gap-3">
              {filtered.slice(0, 2).map((item, index) => (
                <Card
                  key={item.title}
                  variant="glass"
                  motion="tilt"
                  className="ap-enter-slide ap-hover-glow cursor-pointer"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardContent className="p-3 space-y-2">
                    <div className={cn("w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center", item.color)}>
                      <item.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="explore" className="mt-3">
            <div className="grid grid-cols-2 gap-3">
              {filtered.map((item, index) => (
                <Card
                  key={item.title}
                  variant="glass"
                  motion="tilt"
                  className="ap-enter-slide ap-hover-glow cursor-pointer"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardContent className="p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className={cn("w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center", item.color)}>
                        <item.icon className="h-4 w-4 text-white" />
                      </div>
                      <button onClick={() => togglePin(item.title)} className="ap-active-squish">
                        <Star className={cn(
                          "h-3.5 w-3.5 transition-all",
                          pinnedItems.includes(item.title) ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"
                        )} />
                      </button>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

// ============================================
// Weather Block
// ============================================
function WeatherBlock() {
  const conditions = [
    { label: "Sunny", icon: Sun, temp: 28 },
    { label: "Cloudy", icon: Cloud, temp: 22 },
    { label: "Rainy", icon: CloudRain, temp: 18 },
    { label: "Snowy", icon: CloudSnow, temp: -2 },
  ]
  const [conditionIndex, setConditionIndex] = useState(0)
  const [selectedDay, setSelectedDay] = useState(0)

  const current = conditions[conditionIndex]
  const WeatherIcon = current.icon

  const forecast = [
    { day: "Mon", icon: Sun, high: 28, low: 19 },
    { day: "Tue", icon: Cloud, high: 24, low: 17 },
    { day: "Wed", icon: CloudRain, high: 20, low: 15 },
    { day: "Thu", icon: Sun, high: 27, low: 18 },
    { day: "Fri", icon: Cloud, high: 23, low: 16 },
  ]

  const skyGradients = [
    "from-amber-300 via-orange-300 to-sky-400",
    "from-slate-300 via-gray-400 to-slate-500",
    "from-slate-400 via-blue-400 to-indigo-500",
    "from-blue-100 via-slate-200 to-blue-300",
  ]

  return (
    <Card variant="glass" className="max-w-sm overflow-hidden">
      {/* Sky */}
      <div className={cn(
        "relative p-6 bg-gradient-to-br transition-all duration-500",
        skyGradients[conditionIndex]
      )}>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-6xl font-bold text-aurora">{current.temp}°</p>
            <p className="text-white/90 font-medium mt-1">{current.label}</p>
            <p className="text-white/60 text-sm">Tokyo, Japan</p>
          </div>
          <div className="ap-enter-bounce" key={conditionIndex}>
            <WeatherIcon className="h-16 w-16 text-white drop-shadow-lg" />
          </div>
        </div>
      </div>

      <CardContent className="p-4 space-y-4">
        {/* Weather toggle */}
        <div className="flex gap-2">
          {conditions.map((c, i) => (
            <Button
              key={c.label}
              variant={conditionIndex === i ? "aurora" : "ghost"}
              size="sm"
              motion="pop"
              onClick={() => setConditionIndex(i)}
              className="flex-1"
            >
              <c.icon className="h-4 w-4" />
            </Button>
          ))}
        </div>

        {/* Time scrub */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>6:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>24:00</span>
          </div>
          <Slider variant="aurora" defaultValue={[50]} max={100} />
        </div>

        <Separator variant="aurora" />

        {/* 5-day forecast */}
        <div className="flex gap-2">
          {forecast.map((day, index) => (
            <button
              key={day.day}
              onClick={() => setSelectedDay(index)}
              className={cn(
                "flex-1 p-2 rounded-lg text-center transition-all ap-hover-tilt",
                selectedDay === index ? "bg-primary/10 ring-1 ring-primary/30" : "hover:bg-muted/50"
              )}
            >
              <p className="text-xs text-muted-foreground">{day.day}</p>
              <day.icon className="h-5 w-5 mx-auto my-1 ap-enter-bounce" style={{ animationDelay: `${index * 80}ms` }} />
              <p className="text-xs font-medium">{day.high}°</p>
              <p className="text-[10px] text-muted-foreground">{day.low}°</p>
            </button>
          ))}
        </div>

        {/* Humidity */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Droplets className="h-4 w-4" />
              Humidity
            </span>
            <span className="font-medium">65%</span>
          </div>
          <Progress variant="aurora" value={65} />
        </div>

        {/* Wind */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Wind className="h-4 w-4" />
              Wind
            </span>
            <span className="font-medium">12 km/h</span>
          </div>
          <Progress variant="aurora" value={30} />
        </div>
      </CardContent>
    </Card>
  )
}

// ============================================
// User Profile Block
// ============================================
function UserProfileBlock() {
  const [isFollowing, setIsFollowing] = useState(false)
  const [followerCount, setFollowerCount] = useState(2847)
  const [isAvailable, setIsAvailable] = useState(true)

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
    setFollowerCount(prev => isFollowing ? prev - 1 : prev + 1)
  }

  const stats = [
    { label: "Posts", value: "342" },
    { label: "Followers", value: followerCount.toLocaleString() },
    { label: "Following", value: "128" },
  ]

  const interests = ["React", "Design", "Motion", "TypeScript", "UI/UX"]

  return (
    <Card variant="glass" className="max-w-sm overflow-hidden">
      {/* Aurora banner */}
      <div className="h-24 bg-aurora relative">
        <div className="absolute -bottom-10 left-4">
          <Avatar className="h-20 w-20 ring-4 ring-background ap-hover-scale">
            <AvatarImage src="https://i.pravatar.cc/80?img=5" />
            <AvatarFallback>RK</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <CardContent className="pt-12 p-4 space-y-4">
        {/* Name & follow */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-aurora">Ren Kobayashi</h3>
            <p className="text-sm text-muted-foreground">@ren_aurora_dev</p>
          </div>
          <Button
            variant={isFollowing ? "glass" : "aurora"}
            size="sm"
            motion="jelly"
            onClick={handleFollow}
          >
            {isFollowing ? (
              <><UserCheck className="h-4 w-4 mr-1" /> Following</>
            ) : (
              <><Plus className="h-4 w-4 mr-1" /> Follow</>
            )}
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Building beautiful interfaces with aurora gradients and motion design.
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center ap-enter-pop" style={{ animationDelay: `${index * 100}ms` }}>
              <p className="text-lg font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <Separator variant="aurora" />

        {/* Interests */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Interests</p>
          <div className="flex flex-wrap gap-2">
            {interests.map(interest => (
              <Tag key={interest} variant="aurora" size="sm">{interest}</Tag>
            ))}
          </div>
        </div>

        <Separator variant="aurora" />

        {/* Available toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={cn(
              "w-2 h-2 rounded-full transition-colors",
              isAvailable ? "bg-emerald-500" : "bg-muted-foreground"
            )} />
            <span className="text-sm">{isAvailable ? "Available for work" : "Busy"}</span>
          </div>
          <Switch
            variant="aurora"
            checked={isAvailable}
            onCheckedChange={setIsAvailable}
          />
        </div>
      </CardContent>
    </Card>
  )
}

// ============================================
// File Explorer Block
// ============================================
function FileExplorerBlock() {
  const [selectedFolder, setSelectedFolder] = useState("src")
  const [expandedFolders, setExpandedFolders] = useState<string[]>(["src"])
  const [viewMode, setViewMode] = useState<"list" | "grid">("list")

  const folders = [
    { name: "src", children: ["components", "utils", "styles"] },
    { name: "public", children: ["images", "fonts"] },
    { name: "docs", children: [] },
  ]

  const files: Record<string, { name: string; icon: typeof File; size: string; modified: string }[]> = {
    src: [
      { name: "App.tsx", icon: FileCode, size: "4.2 KB", modified: "2h ago" },
      { name: "index.ts", icon: FileCode, size: "1.1 KB", modified: "1d ago" },
      { name: "globals.css", icon: FileText, size: "8.7 KB", modified: "3h ago" },
    ],
    public: [
      { name: "logo.png", icon: FileImage, size: "24 KB", modified: "1w ago" },
      { name: "favicon.ico", icon: FileImage, size: "4.1 KB", modified: "2w ago" },
    ],
    docs: [
      { name: "README.md", icon: FileText, size: "2.3 KB", modified: "5d ago" },
    ],
    components: [
      { name: "Button.tsx", icon: FileCode, size: "3.8 KB", modified: "4h ago" },
      { name: "Card.tsx", icon: FileCode, size: "2.1 KB", modified: "1d ago" },
    ],
    utils: [
      { name: "cn.ts", icon: FileCode, size: "0.5 KB", modified: "2w ago" },
    ],
    styles: [
      { name: "aurora.css", icon: FileText, size: "6.3 KB", modified: "1h ago" },
    ],
    images: [
      { name: "hero.png", icon: FileImage, size: "120 KB", modified: "3d ago" },
    ],
    fonts: [
      { name: "Inter.woff2", icon: File, size: "45 KB", modified: "1m ago" },
    ],
  }

  const toggleFolder = (name: string) => {
    setExpandedFolders(prev =>
      prev.includes(name) ? prev.filter(f => f !== name) : [...prev, name]
    )
    setSelectedFolder(name)
  }

  const currentFiles = files[selectedFolder] || []
  const usedStorage = 67

  return (
    <Card variant="glass" className="max-w-md">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            <HardDrive className="h-4 w-4" />
            File Explorer
          </CardTitle>
          <div className="flex gap-1">
            <Button
              variant={viewMode === "list" ? "aurora" : "ghost"}
              size="sm"
              motion="pop"
              onClick={() => setViewMode("list")}
            >
              <List className="h-3.5 w-3.5" />
            </Button>
            <Button
              variant={viewMode === "grid" ? "aurora" : "ghost"}
              size="sm"
              motion="pop"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Folder tree */}
        <div className="space-y-1 p-2 rounded-lg bg-muted/30">
          {folders.map(folder => (
            <div key={folder.name}>
              <button
                onClick={() => toggleFolder(folder.name)}
                className={cn(
                  "flex items-center gap-2 w-full p-1.5 rounded text-sm transition-colors ap-hover-scale",
                  selectedFolder === folder.name ? "bg-primary/10 text-primary" : "hover:bg-muted/50"
                )}
              >
                {expandedFolders.includes(folder.name) ? (
                  <FolderOpen className="h-4 w-4" />
                ) : (
                  <Folder className="h-4 w-4" />
                )}
                {folder.name}
              </button>
              {expandedFolders.includes(folder.name) && folder.children.length > 0 && (
                <div className="ml-4 space-y-0.5">
                  {folder.children.map(child => (
                    <button
                      key={child}
                      onClick={() => setSelectedFolder(child)}
                      className={cn(
                        "flex items-center gap-2 w-full p-1 rounded text-sm transition-colors ap-hover-scale",
                        selectedFolder === child ? "bg-primary/10 text-primary" : "hover:bg-muted/50 text-muted-foreground"
                      )}
                    >
                      <Folder className="h-3.5 w-3.5" />
                      {child}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <Separator variant="muted" />

        {/* File list */}
        <div className={cn(
          viewMode === "grid" ? "grid grid-cols-2 gap-2" : "space-y-1"
        )}>
          {currentFiles.map((file, index) => (
            <div
              key={file.name}
              className={cn(
                "flex items-center gap-3 p-2 rounded-lg transition-colors ap-enter-slide ap-hover-scale cursor-pointer hover:bg-muted/30",
                viewMode === "grid" && "flex-col text-center p-3"
              )}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <file.icon className={cn("h-4 w-4 text-muted-foreground", viewMode === "grid" && "h-8 w-8")} />
              <div className={cn("flex-1 min-w-0", viewMode === "grid" && "flex-none")}>
                <p className="text-sm font-medium truncate">{file.name}</p>
                <p className="text-xs text-muted-foreground">{file.size}</p>
              </div>
              {viewMode === "list" && (
                <span className="text-xs text-muted-foreground">{file.modified}</span>
              )}
            </div>
          ))}
        </div>

        <Separator variant="muted" />

        {/* Storage */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Storage</span>
            <span className="font-medium">{usedStorage}% used</span>
          </div>
          <Progress variant="aurora" value={usedStorage} />
          <p className="text-xs text-muted-foreground">6.7 GB of 10 GB used</p>
        </div>
      </CardContent>
    </Card>
  )
}

// ============================================
// Flight Tracker Block
// ============================================
function FlightTrackerBlock() {
  const [flightProgress, setFlightProgress] = useState(62)
  const [isTracking, setIsTracking] = useState(true)

  return (
    <Card variant="aurora" motion="float" className="max-w-md overflow-hidden">
      {/* Sky gradient */}
      <div className="relative h-36 bg-gradient-to-b from-indigo-900 via-blue-800 to-sky-600 overflow-hidden">
        {/* Stars */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/60"
            style={{
              left: `${(i * 17 + 5) % 100}%`,
              top: `${(i * 13 + 8) % 60}%`,
              animationDelay: `${i * 200}ms`,
            }}
          />
        ))}

        {/* Flight path line */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 144" preserveAspectRatio="none">
          <path
            d="M 40 100 Q 200 20 360 100"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
            strokeDasharray="6 4"
          />
          <path
            d="M 40 100 Q 200 20 360 100"
            fill="none"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="2"
            strokeDasharray="6 4"
            strokeDashoffset={400 - (flightProgress / 100) * 400}
            style={{ transition: "stroke-dashoffset 0.5s ease" }}
          />
        </svg>

        {/* Departure dot */}
        <div className="absolute bottom-7 left-[10%] w-3 h-3 rounded-full bg-white/80 ring-2 ring-white/30" />

        {/* Plane */}
        <div
          className="absolute ap-hover-float transition-all duration-500"
          style={{
            left: `${10 + (flightProgress / 100) * 80}%`,
            top: `${70 - Math.sin((flightProgress / 100) * Math.PI) * 55}%`,
            transform: `translate(-50%, -50%) rotate(${-30 + (flightProgress / 100) * 60}deg)`,
          }}
        >
          <div className="relative">
            {isTracking && <div className="absolute inset-0 -m-1.5 ap-pulse-ring rounded-full" />}
            <Plane className="h-6 w-6 text-white drop-shadow-lg" />
          </div>
        </div>

        {/* Arrival dot */}
        <div className="absolute bottom-7 right-[10%] w-3 h-3 rounded-full bg-white/40 ring-2 ring-white/20" />
      </div>

      <CardContent className="p-4 space-y-4">
        {/* Airport codes */}
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-2xl font-bold text-aurora">HND</p>
            <p className="text-xs text-muted-foreground">Tokyo Haneda</p>
            <p className="text-xs text-muted-foreground">10:30 AM</p>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 px-4">
            <div className="h-px flex-1 bg-border" />
            <PlaneTakeoff className="h-4 w-4 text-muted-foreground" />
            <div className="h-px flex-1 bg-border" />
            <PlaneLanding className="h-4 w-4 text-muted-foreground" />
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-aurora">SFO</p>
            <p className="text-xs text-muted-foreground">San Francisco</p>
            <p className="text-xs text-muted-foreground">3:45 PM</p>
          </div>
        </div>

        {/* Flight progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Flight Progress</span>
            <span className="font-medium">{flightProgress}%</span>
          </div>
          <Progress variant="aurora" value={flightProgress} />
        </div>

        {/* Info row */}
        <div className="flex gap-3">
          <Badge variant="glass">
            <Wifi className="h-3 w-3 mr-1" />
            Wi-Fi
          </Badge>
          <Badge variant="glass">
            <Clock className="h-3 w-3 mr-1" />
            5h 15m left
          </Badge>
          <Badge variant="glass">
            <TrendingUp className="h-3 w-3 mr-1" />
            35,000 ft
          </Badge>
        </div>

        {/* Controls */}
        <div className="flex gap-2">
          <Slider
            variant="aurora"
            value={[flightProgress]}
            onValueChange={([val]) => setFlightProgress(val)}
            max={100}
            className="flex-1"
          />
          <Button
            variant={isTracking ? "aurora" : "ghost"}
            size="sm"
            motion="pop"
            onClick={() => setIsTracking(!isTracking)}
          >
            {isTracking ? "Live" : "Paused"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// ============================================
// Aurora Command Block
// ============================================
function AuroraCommandBlock() {
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)

  const commands = [
    { name: "Go to Dashboard", icon: Layout, shortcut: "G D", category: "Navigation" },
    { name: "Open Settings", icon: Settings, shortcut: "G S", category: "Navigation" },
    { name: "New Project", icon: Plus, shortcut: "N P", category: "Actions" },
    { name: "Toggle Theme", icon: Palette, shortcut: "T T", category: "Preferences" },
    { name: "Open Terminal", icon: Terminal, shortcut: "Ctrl `", category: "Tools" },
    { name: "Search Files", icon: Search, shortcut: "Ctrl P", category: "Tools" },
    { name: "Run Command", icon: Zap, shortcut: "Ctrl R", category: "Actions" },
    { name: "View Components", icon: Code, shortcut: "G C", category: "Navigation" },
  ]

  const filtered = commands.filter(cmd =>
    cmd.name.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  )

  const highlightMatch = (text: string) => {
    if (!query) return text
    const idx = text.toLowerCase().indexOf(query.toLowerCase())
    if (idx === -1) return text
    return (
      <>
        {text.slice(0, idx)}
        <span className="text-aurora font-semibold">{text.slice(idx, idx + query.length)}</span>
        {text.slice(idx + query.length)}
      </>
    )
  }

  return (
    <Card variant="glass" className="max-w-md">
      <CardContent className="p-0">
        {/* Search */}
        <div className="flex items-center gap-3 p-3 border-b border-border/50">
          <Command className="h-4 w-4 text-muted-foreground shrink-0" />
          <input
            type="text"
            placeholder="Type a command..."
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0) }}
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <Tag variant="aurora" size="sm">
            <Command className="h-3 w-3 mr-0.5" />K
          </Tag>
        </div>

        {/* Results */}
        <div className="p-2 max-h-80 overflow-y-auto">
          {filtered.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-6">No commands found</p>
          ) : (
            <>
              {/* Group by category */}
              {Array.from(new Set(filtered.map(c => c.category))).map(category => (
                <div key={category} className="mb-2">
                  <p className="text-xs text-muted-foreground px-2 py-1 font-medium">{category}</p>
                  {filtered.filter(c => c.category === category).map((cmd, index) => {
                    const globalIndex = filtered.indexOf(cmd)
                    return (
                      <button
                        key={cmd.name}
                        className={cn(
                          "flex items-center gap-3 w-full p-2.5 rounded-lg text-sm transition-all ap-enter-slide ap-hover-glow",
                          selectedIndex === globalIndex ? "bg-primary/10" : "hover:bg-muted/30"
                        )}
                        style={{ animationDelay: `${index * 40}ms` }}
                        onMouseEnter={() => setSelectedIndex(globalIndex)}
                        onClick={() => setQuery(cmd.name)}
                      >
                        <div className="p-1.5 rounded-md bg-muted/50">
                          <cmd.icon className="h-4 w-4" />
                        </div>
                        <span className="flex-1 text-left">{highlightMatch(cmd.name)}</span>
                        <Tag variant="aurora" size="sm">{cmd.shortcut}</Tag>
                      </button>
                    )
                  })}
                </div>
              ))}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-2 border-t border-border/50 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Tag variant="outline" size="sm">
              <ArrowRight className="h-2.5 w-2.5 rotate-[-90deg]" />
              <ArrowRight className="h-2.5 w-2.5 rotate-90" />
            </Tag>
            Navigate
          </div>
          <div className="flex items-center gap-2">
            <Tag variant="outline" size="sm">Enter</Tag>
            Select
          </div>
          <div className="flex items-center gap-2">
            <Tag variant="outline" size="sm">Esc</Tag>
            Close
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// ============================================
// Main Page
// ============================================
export default function BlocksPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Blocks</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Ready-to-use UI blocks showcasing the AuroraPop animation system.
          Copy and paste these blocks into your project.
        </p>
      </div>

      {/* Blocks Grid */}
      <div className="space-y-16">
        {/* Messaging */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Messaging</h2>
            <p className="text-muted-foreground">Chat interface with bounce and slide animations</p>
          </div>
          <MessageBlock />
        </section>

        {/* Music Player */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Music Player</h2>
            <p className="text-muted-foreground">Media player with jelly and pulse-ring effects</p>
          </div>
          <MusicPlayerBlock />
        </section>

        {/* Notifications */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Notifications</h2>
            <p className="text-muted-foreground">Notification stack with slide and wiggle animations</p>
          </div>
          <NotificationBlock />
        </section>

        {/* Location */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Location Card</h2>
            <p className="text-muted-foreground">Map card with float and bounce effects</p>
          </div>
          <LocationBlock />
        </section>

        {/* Todo */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Todo List</h2>
            <p className="text-muted-foreground">Task list with checkbox bounce and wiggle delete</p>
          </div>
          <TodoBlock />
        </section>

        {/* Social */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Social Post</h2>
            <p className="text-muted-foreground">Social media card with like bounce animation</p>
          </div>
          <SocialPostBlock />
        </section>

        {/* Interactive Map */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Interactive Map</h2>
            <p className="text-muted-foreground">Aurora radial gradient map with selectable pins and detail panel</p>
          </div>
          <InteractiveMapBlock />
        </section>

        {/* Navigation Dashboard */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Navigation Dashboard</h2>
            <p className="text-muted-foreground">Command center with aurora tabs, search, and tilt cards</p>
          </div>
          <NavigationDashboardBlock />
        </section>

        {/* Weather */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Weather Dashboard</h2>
            <p className="text-muted-foreground">Weather display with aurora temperature, forecast, and progress bars</p>
          </div>
          <WeatherBlock />
        </section>

        {/* User Profile */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">User Profile</h2>
            <p className="text-muted-foreground">Premium profile with aurora banner, tags, and availability toggle</p>
          </div>
          <UserProfileBlock />
        </section>

        {/* File Explorer */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">File Explorer</h2>
            <p className="text-muted-foreground">File browser with folder tree, view modes, and aurora storage bar</p>
          </div>
          <FileExplorerBlock />
        </section>

        {/* Flight Tracker */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Flight Tracker</h2>
            <p className="text-muted-foreground">Live flight tracker with aurora sky, route path, and progress</p>
          </div>
          <FlightTrackerBlock />
        </section>

        {/* Command Palette */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Command Palette</h2>
            <p className="text-muted-foreground">Spotlight-style command search with aurora highlights and shortcuts</p>
          </div>
          <AuroraCommandBlock />
        </section>
      </div>
    </div>
  )
}
