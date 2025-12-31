# Button Component Guide

## Overview

Created a unified, flexible Button component that can handle **all** button designs shown in your UI. This single component replaces the need for multiple button implementations while maintaining all the visual variations.

## What Was Created

### 1. Base Button Component (`src/components/ui/button.jsx`)
A comprehensive button component with:
- **6 Variants**: default (blue), success (green), destructive (red), outline (white), muted (gray), ghost (transparent)
- **7 Sizes**: xs, sm, default, md, lg, xl, 2xl
- **8 Border Radius**: none, sm, default, md, lg, xl, 2xl, full (oval)
- **Icon Support**: Left and/or right icons
- **States**: Loading spinner, disabled
- **Custom Dimensions**: Width and height props
- **Full Width**: Option for full-width buttons

### 2. Utility Function (`src/lib/utils.js`)
Class name merging utility for conditional styling.

### 3. All Buttons Refactored
All 23 button components now use the base Button component:
- ✅ AddButton
- ✅ AppleButton
- ✅ AvatarButton
- ✅ BackToDashBoardButton
- ✅ BrowseFileButton
- ✅ ContinueButton
- ✅ CreateNewChatbotButton
- ✅ CustomizeColorButton
- ✅ DemoButton
- ✅ DoneAndProcessingButton
- ✅ DownloadFileButton
- ✅ EndSessionButton
- ✅ FaceBookButton
- ✅ GenerateSiteMapButton
- ✅ GoogleButton
- ✅ NextButton
- ✅ PreviousButton
- ✅ SiteMapGeneratedButton (fixed export name)
- ✅ StartUploadingDocumentButton
- ✅ UpdateKnowledgeButton
- ✅ VerifyDnsButton
- ✅ VerifyingDNSButton

## Button Examples from Your Design

### 1. Wide Blue Oval Buttons
```jsx
// "Start Demo" button
<Button variant="default" size="2xl" radius="full" width="578px">
  Start Demo
</Button>

// "Continue" button
<Button variant="default" size="xl" radius="2xl" width="464px">
  Continue
</Button>

// "Download Your File" button
<Button variant="default" size="lg" radius="2xl" width="330px">
  Download Your File
</Button>

// "Verify DNS" button
<Button variant="default" size="lg" radius="2xl" width="356px">
  Verify DNS
</Button>
```

### 2. Small Blue Buttons
```jsx
// "Add" button
<Button variant="default" size="default" radius="default" width="68px">
  Add
</Button>

// "Browse files" button
<Button variant="default" size="default" radius="default" width="100px">
  Browse files
</Button>

// "Customize Color" button
<Button variant="default" size="default" radius="default" width="155px">
  Customize Color
</Button>
```

### 3. Green Success Buttons
```jsx
// "Start Avatar Session" button
<Button 
  variant="success" 
  size="sm" 
  radius="full" 
  width="201.5px"
  leftIcon={<PlayIcon />}
>
  Start Avatar Session
</Button>
```

### 4. Red Destructive Buttons
```jsx
// "End Session" button
<Button 
  variant="destructive" 
  size="xs" 
  radius="lg" 
  width="113px"
>
  End Session
</Button>
```

### 5. Social Login Buttons (White with Border)
```jsx
// "Google" button
<Button 
  variant="outline" 
  size="default" 
  radius="xl" 
  width="164px"
  leftIcon={<GoogleIcon />}
>
  Google
</Button>

// "Apple" button
<Button 
  variant="outline" 
  size="default" 
  radius="xl" 
  width="164px"
  leftIcon={<AppleIcon />}
>
  Apple
</Button>

// "Facebook" button
<Button 
  variant="outline" 
  size="default" 
  radius="xl" 
  width="164px"
  leftIcon={<FacebookIcon />}
>
  Facebook
</Button>
```

### 6. Navigation Buttons
```jsx
// "Next" button with arrow
<Button 
  variant="default" 
  size="default" 
  radius="md" 
  width="87px"
  rightIcon={<ArrowRight size={16} />}
>
  Next
</Button>

// "Previous" button with arrow
<Button 
  variant="outline" 
  size="default" 
  radius="md" 
  width="112px"
  leftIcon={<ArrowLeft size={16} />}
>
  Previous
</Button>
```

### 7. Muted/Loading State Buttons
```jsx
// "Verifying DNS..." button
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

// "Generated SiteMap..." button
<Button 
  variant="muted" 
  size="lg" 
  radius="2xl" 
  width="356px"
  loading
  disabled
>
  Generated SiteMap...
</Button>
```

### 8. Buttons with Icons
```jsx
// "Start creating new chat bot" with plus icon
<Button 
  variant="default" 
  size="md" 
  radius="xl" 
  width="250px"
  leftIcon={<span>+</span>}
>
  Start creating new chat bot
</Button>

// "Back to Dashboard" with arrow icon
<Button 
  variant="ghost" 
  size="default" 
  radius="default"
  leftIcon={<BackArrowIcon />}
  className="text-[21px] text-[#4443E4]"
>
  Back to Dashboard
</Button>
```

## Usage Patterns

### Using the Base Button Directly
```jsx
import { Button } from "../components/ui/button";

<Button 
  variant="default" 
  size="lg" 
  radius="2xl" 
  width="300px"
  onClick={handleClick}
>
  My Button
</Button>
```

### Using Specific Button Components
```jsx
import { AddButton, ContinueButton, DemoButton } from "../buttons";

<AddButton onClick={handleAdd} />
<ContinueButton onClick={handleContinue} />
<DemoButton onClick={handleDemo} />
```

### Custom Styling
```jsx
<Button 
  variant="default" 
  size="default"
  className="mb-5 custom-class"
  onClick={handleClick}
>
  Custom Button
</Button>
```

## Benefits

1. **Single Source of Truth**: One component handles all button styles
2. **Consistency**: All buttons use the same base styling system
3. **Maintainability**: Update button styles in one place
4. **Flexibility**: Easy to create new button variations
5. **Type Safety**: Clear prop types and defaults
6. **Reusability**: Use base Button directly or through specific components

## File Structure

```
src/
├── components/
│   └── ui/
│       ├── button.jsx       # Base Button component
│       ├── index.js         # Exports
│       └── README.md        # Documentation
├── lib/
│   └── utils.js            # Utility functions
└── buttons/
    ├── [23 button files]   # All refactored buttons
    └── ...
```

## Testing

✅ Build successful - All components compile correctly
✅ No linter errors
✅ All button components refactored
✅ Maintains backward compatibility with existing onClick handlers

## Next Steps

You can now:
1. Use the base `Button` component directly for new buttons
2. Continue using specific button components (they all use the base Button)
3. Create new button variations easily by combining props
4. Customize any button with the `className` prop

