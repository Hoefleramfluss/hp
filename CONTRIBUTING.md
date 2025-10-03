# Contributing Guide

## Development Workflow

1. **Clone Repository**
   ```bash
   git clone https://github.com/your-org/voxon-homepage.git
   cd voxon-homepage
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Make Changes**
   - Follow existing code style
   - Use TypeScript for type safety
   - Keep components small and focused
   - Add comments for complex logic

6. **Test Your Changes**
   ```bash
   npm run build
   npm run preview
   ```

7. **Lint Code**
   ```bash
   npm run lint
   ```

8. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

   **Commit Message Convention:**
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation
   - `style:` Formatting
   - `refactor:` Code restructuring
   - `perf:` Performance improvement
   - `test:` Tests
   - `chore:` Maintenance

9. **Push & Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## Code Style

- **TypeScript**: Always use proper types
- **Components**: Functional components with hooks
- **Styling**: TailwindCSS utility classes
- **Animations**: Framer Motion for complex animations
- **Naming**: 
  - Components: PascalCase
  - Files: PascalCase for components
  - Variables: camelCase
  - Constants: UPPER_SNAKE_CASE

## Component Structure

```tsx
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface MyComponentProps {
  title: string
  description?: string
}

const MyComponent = ({ title, description }: MyComponentProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </motion.div>
    </section>
  )
}

export default MyComponent
```

## Performance Guidelines

- Lazy load images and components when possible
- Use `React.memo()` for expensive components
- Optimize animations (use `transform` and `opacity`)
- Minimize bundle size (check with `npm run build`)
- Test on slow networks (Chrome DevTools → Network → Slow 3G)

## Accessibility

- Use semantic HTML
- Add proper ARIA labels
- Ensure keyboard navigation works
- Test with screen readers
- Maintain color contrast (WCAG AA minimum)

## Questions?

Open an issue or contact: kontakt@workflow-ai.de
