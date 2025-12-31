# Button Component

A flexible, reusable button component that supports all button styles in your design system.

## Features

- **6 Variants**: default (blue), success (green), destructive (red), outline (white with border), muted (light gray), ghost (transparent)
- **7 Sizes**: xs, sm, default, md, lg, xl, 2xl
- **8 Border Radius Options**: none, sm, default, md, lg, xl, 2xl, full
- **Icon Support**: Left and/or right icons
- **States**: Loading, disabled
- **Custom Dimensions**: Custom width and height support
- **Full Width**: Option for full-width buttons

## Usage

### Basic Usage

```jsx
import { Button } from "../components/ui/button";

<Button>Click me</Button>
```

### With Variants

```jsx
<Button variant="default">Primary Button</Button>
<Button variant="success">Success Button</Button>
<Button variant="destructive">Delete Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="muted">Muted Button</Button>
<Button variant="ghost">Ghost Button</Button>
```

### With Sizes

```jsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="2xl">2X Large</Button>
```

### With Border Radius

```jsx
<Button radius="sm">Small Radius</Button>
<Button radius="default">Default Radius</Button>
<Button radius="md">Medium Radius</Button>
<Button radius="lg">Large Radius</Button>
<Button radius="xl">Extra Large Radius</Button>
<Button radius="2xl">2X Large Radius</Button>
<Button radius="full">Full Radius (Oval)</Button>
```

### With Icons

```jsx
import { ArrowRight } from "lucide-react";

<Button leftIcon={<Icon />}>With Left Icon</Button>
<Button rightIcon={<ArrowRight size={16} />}>With Right Icon</Button>
<Button leftIcon={<Icon />} rightIcon={<ArrowRight />}>Both Icons</Button>
```

### Custom Dimensions

```jsx
<Button width="200px">Custom Width</Button>
<Button width={200}>Custom Width (number)</Button>
<Button height="50px">Custom Height</Button>
<Button width="578px" height="40px">Custom Both</Button>
```

### States

```jsx
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>
<Button loading disabled>Loading & Disabled</Button>
```

### Full Width

```jsx
<Button fullWidth>Full Width Button</Button>
```

### Complete Examples

```jsx
// Large blue oval button (like "Start Demo")
<Button 
  variant="default" 
  size="2xl" 
  radius="full" 
  width="578px"
>
  Start Demo
</Button>

// Green success button with icon (like "Start Avatar Session")
<Button 
  variant="success" 
  size="sm" 
  radius="full" 
  width="201.5px"
  leftIcon={<PlayIcon />}
>
  Start Avatar Session
</Button>

// Red destructive button (like "End Session")
<Button 
  variant="destructive" 
  size="xs" 
  radius="lg" 
  width="113px"
>
  End Session
</Button>

// Social login button (like "Google", "Apple", "Facebook")
<Button 
  variant="outline" 
  size="default" 
  radius="xl" 
  width="164px"
  leftIcon={<GoogleIcon />}
>
  Google
</Button>

// Navigation button with arrow (like "Next")
<Button 
  variant="default" 
  size="default" 
  radius="md" 
  width="87px"
  rightIcon={<ArrowRight size={16} />}
>
  Next
</Button>

// Muted loading state (like "Verifying DNS...")
<Button 
  variant="muted" 
  size="lg" 
  radius="2xl" 
  width="356px"
  loading
  disabled
>
  Verifying DNS...
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "success" \| "destructive" \| "outline" \| "muted" \| "ghost"` | `"default"` | Button style variant |
| `size` | `"xs" \| "sm" \| "default" \| "md" \| "lg" \| "xl" \| "2xl"` | `"default"` | Button size |
| `radius` | `"none" \| "sm" \| "default" \| "md" \| "lg" \| "xl" \| "2xl" \| "full"` | `"default"` | Border radius |
| `leftIcon` | `ReactNode` | - | Icon to display on the left |
| `rightIcon` | `ReactNode` | - | Icon to display on the right |
| `loading` | `boolean` | `false` | Shows loading spinner |
| `disabled` | `boolean` | `false` | Disables the button |
| `fullWidth` | `boolean` | `false` | Makes button full width |
| `width` | `string \| number` | - | Custom width (e.g., "200px" or 200) |
| `height` | `string \| number` | - | Custom height (e.g., "50px" or 50) |
| `className` | `string` | - | Additional CSS classes |
| `onClick` | `function` | - | Click handler |
| `type` | `string` | `"button"` | Button type |
| `...props` | - | - | All standard button props |

## Variant Colors

- **default**: `#4443E4` (blue) - Primary actions
- **success**: `#1BC469` (green) - Success/positive actions
- **destructive**: `#F73F49` (red) - Destructive/delete actions
- **outline**: White background with `#171A1F` border - Secondary actions
- **muted**: `#4443E40D` background with `#2F3542` text - Disabled/loading states
- **ghost**: Transparent - Text-only actions

## Size Specifications

- **xs**: 30px height, 10px text, tight tracking
- **sm**: 30px height, 12px text
- **default**: 36px height, 14px text
- **md**: 40px height, 14px text
- **lg**: 45px height, 18px text
- **xl**: 52px height, 18px text
- **2xl**: 40px height, 13px text

## Radius Specifications

- **sm**: 4px
- **default**: 6px
- **md**: 8px
- **lg**: 15px
- **xl**: 18px
- **2xl**: 26px
- **full**: 50px (fully rounded/oval)

