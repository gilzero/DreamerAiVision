import React from 'react';
import { typography, applyTypography } from '@/styles/typography';
import { colors, opacities, getColor } from '@/styles/colors';
import { AppleButton } from '@/components/ui/apple-button';
import { AppleCard, AppleCardHeader, AppleCardTitle, AppleCardDescription, AppleCardContent } from '@/components/ui/apple-card';
import { AppleInput } from '@/components/ui/apple-input';
import { AppleTextarea } from '@/components/ui/apple-textarea';
import { cn } from '@/lib/utils';

/**
 * Design System Documentation Component
 * This component serves as a reference guide for the Apple-inspired design system
 * It showcases typography, colors, and components with proper usage examples
 */
export default function DesignGuide() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className={applyTypography.heading.h1('mb-8 text-apple-gray-500')}>
        DreamerAiVision Design System
      </h1>

      {/* Typography Section */}
      <section className="mb-16">
        <h2 className={applyTypography.heading.h2('mb-6 text-apple-gray-500')}>Typography</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className={applyTypography.heading.h3('mb-4 text-apple-gray-500')}>Headings</h3>
            <div className="space-y-4">
              <div>
                <p className="text-apple-gray-300 text-sm mb-2">typography.heading.h1</p>
                <h1 className={typography.heading.h1}>Heading 1</h1>
              </div>
              <div>
                <p className="text-apple-gray-300 text-sm mb-2">typography.heading.h2</p>
                <h2 className={typography.heading.h2}>Heading 2</h2>
              </div>
              <div>
                <p className="text-apple-gray-300 text-sm mb-2">typography.heading.h3</p>
                <h3 className={typography.heading.h3}>Heading 3</h3>
              </div>
              <div>
                <p className="text-apple-gray-300 text-sm mb-2">typography.heading.h4</p>
                <h4 className={typography.heading.h4}>Heading 4</h4>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className={applyTypography.heading.h3('mb-4 text-apple-gray-500')}>Body Text</h3>
            <div className="space-y-4">
              <div>
                <p className="text-apple-gray-300 text-sm mb-2">typography.body.large</p>
                <p className={typography.body.large}>Large body text for important paragraphs.</p>
              </div>
              <div>
                <p className="text-apple-gray-300 text-sm mb-2">typography.body.medium</p>
                <p className={typography.body.medium}>Medium body text for general content.</p>
              </div>
              <div>
                <p className="text-apple-gray-300 text-sm mb-2">typography.body.small</p>
                <p className={typography.body.small}>Small body text for secondary information.</p>
              </div>
              <div>
                <p className="text-apple-gray-300 text-sm mb-2">typography.body.caption</p>
                <p className={typography.body.caption}>Caption text for labels and metadata.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className={applyTypography.heading.h3('mb-4 text-apple-gray-500')}>Display Text</h3>
          <div className="space-y-4">
            <div>
              <p className="text-apple-gray-300 text-sm mb-2">typography.display.large</p>
              <p className={typography.display.large}>Display L</p>
            </div>
            <div>
              <p className="text-apple-gray-300 text-sm mb-2">typography.display.medium</p>
              <p className={typography.display.medium}>Display M</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className={applyTypography.heading.h3('mb-4 text-apple-gray-500')}>Utility Function</h3>
          <div className="space-y-4 bg-apple-gray-100 p-4 rounded-lg">
            <p className="text-apple-gray-500 font-mono text-sm">
              {`// Using applyTypography utility function`}<br />
              {`<h2 className={applyTypography.heading.h2('mb-6 text-apple-gray-500')}>Typography</h2>`}
            </p>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="mb-16">
        <h2 className={applyTypography.heading.h2('mb-6 text-apple-gray-500')}>Colors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className={applyTypography.heading.h3('mb-4 text-apple-gray-500')}>Blue</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-apple-blue-primary rounded-lg mr-4"></div>
                <div>
                  <p className="font-medium">Blue Primary</p>
                  <p className="text-apple-gray-300 text-sm">apple-blue-primary</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-apple-blue-hover rounded-lg mr-4"></div>
                <div>
                  <p className="font-medium">Blue Hover</p>
                  <p className="text-apple-gray-300 text-sm">apple-blue-hover</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-apple-blue-light rounded-lg mr-4"></div>
                <div>
                  <p className="font-medium">Blue Light</p>
                  <p className="text-apple-gray-300 text-sm">apple-blue-light</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className={applyTypography.heading.h3('mb-4 text-apple-gray-500')}>Gray</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-apple-gray-50 rounded-lg mr-4 border border-apple-gray-200"></div>
                <div>
                  <p className="font-medium">Gray 50</p>
                  <p className="text-apple-gray-300 text-sm">apple-gray-50</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-apple-gray-100 rounded-lg mr-4"></div>
                <div>
                  <p className="font-medium">Gray 100</p>
                  <p className="text-apple-gray-300 text-sm">apple-gray-100</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-apple-gray-300 rounded-lg mr-4"></div>
                <div>
                  <p className="font-medium">Gray 300</p>
                  <p className="text-apple-gray-300 text-sm">apple-gray-300</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-apple-gray-500 rounded-lg mr-4"></div>
                <div>
                  <p className="font-medium">Gray 500</p>
                  <p className="text-white text-sm">apple-gray-500</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className={applyTypography.heading.h3('mb-4 text-apple-gray-500')}>Opacity Utility</h3>
          <div className="space-y-4 bg-apple-gray-100 p-4 rounded-lg">
            <p className="text-apple-gray-500 font-mono text-sm">
              {`// Using getColor utility function`}<br />
              {`<div className={\`bg-\${getColor.blue.primary(opacities.light)}\`}></div>`}
            </p>
          </div>
          
          <div className="mt-4 flex space-x-4">
            {Object.entries(opacities).map(([name, value]) => (
              <div key={name} className="text-center">
                <div className={cn("w-16 h-16 rounded-lg mx-auto", `bg-apple-blue-primary/${value}`)}></div>
                <p className="text-sm mt-2">{name} ({value})</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="mb-16">
        <h2 className={applyTypography.heading.h2('mb-6 text-apple-gray-500')}>Components</h2>
        
        <div className="space-y-12">
          {/* Buttons */}
          <div>
            <h3 className={applyTypography.heading.h3('mb-4 text-apple-gray-500')}>Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <AppleButton variant="primary">Primary</AppleButton>
              <AppleButton variant="secondary">Secondary</AppleButton>
              <AppleButton variant="tertiary">Tertiary</AppleButton>
              <AppleButton variant="link">Link</AppleButton>
              <AppleButton variant="ghost">Ghost</AppleButton>
              <AppleButton variant="destructive">Destructive</AppleButton>
            </div>
            
            <div className="mt-4">
              <h4 className={applyTypography.heading.h4('mb-2 text-apple-gray-500')}>Sizes</h4>
              <div className="flex flex-wrap gap-4 items-center">
                <AppleButton variant="primary" size="sm">Small</AppleButton>
                <AppleButton variant="primary" size="md">Medium</AppleButton>
                <AppleButton variant="primary" size="lg">Large</AppleButton>
                <AppleButton variant="primary" size="xl">Extra Large</AppleButton>
              </div>
            </div>
          </div>
          
          {/* Cards */}
          <div>
            <h3 className={applyTypography.heading.h3('mb-4 text-apple-gray-500')}>Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AppleCard variant="default" padding="lg">
                <AppleCardHeader>
                  <AppleCardTitle>Default Card</AppleCardTitle>
                  <AppleCardDescription>This is a default card with medium padding.</AppleCardDescription>
                </AppleCardHeader>
                <AppleCardContent>
                  <p className="text-apple-gray-300">Card content goes here.</p>
                </AppleCardContent>
              </AppleCard>
              
              <AppleCard variant="glass" padding="lg" hover="lift">
                <AppleCardHeader>
                  <AppleCardTitle>Glass Card with Lift</AppleCardTitle>
                  <AppleCardDescription>This card has a glass effect and lifts on hover.</AppleCardDescription>
                </AppleCardHeader>
                <AppleCardContent>
                  <p className="text-apple-gray-300">Card content goes here.</p>
                </AppleCardContent>
              </AppleCard>
              
              <AppleCard variant="elevated" padding="lg" hover="scale">
                <AppleCardHeader>
                  <AppleCardTitle>Elevated Card with Scale</AppleCardTitle>
                  <AppleCardDescription>This card is elevated and scales on hover.</AppleCardDescription>
                </AppleCardHeader>
                <AppleCardContent>
                  <p className="text-apple-gray-300">Card content goes here.</p>
                </AppleCardContent>
              </AppleCard>
            </div>
          </div>
          
          {/* Form Elements */}
          <div>
            <h3 className={applyTypography.heading.h3('mb-4 text-apple-gray-500')}>Form Elements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <AppleInput 
                  label="Name" 
                  placeholder="John Appleseed" 
                />
                
                <div className="mt-4">
                  <AppleInput 
                    label="Email" 
                    placeholder="john@example.com" 
                    error="Please enter a valid email address."
                  />
                </div>
              </div>
              
              <div>
                <AppleTextarea 
                  label="Message" 
                  placeholder="Type your message here..." 
                  rows={4}
                />
                
                <div className="mt-4">
                  <AppleTextarea 
                    label="Feedback" 
                    placeholder="Provide your feedback..." 
                    rows={4}
                    error="Feedback is required."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="mb-16">
        <h2 className={applyTypography.heading.h2('mb-6 text-apple-gray-500')}>Usage Guidelines</h2>
        
        <AppleCard variant="glass" padding="lg">
          <h3 className={applyTypography.heading.h3('mb-4 text-apple-gray-500')}>Typography</h3>
          <ul className="list-disc pl-6 space-y-2 text-apple-gray-300">
            <li>Use the typography system consistently across all components.</li>
            <li>Apply typography using the <code className="bg-apple-gray-100 px-1 py-0.5 rounded">applyTypography</code> utility function.</li>
            <li>Use <code className="bg-apple-gray-100 px-1 py-0.5 rounded">font-serif</code> only for specific accent text.</li>
          </ul>
        </AppleCard>
        
        <AppleCard variant="glass" padding="lg" className="mt-6">
          <h3 className={applyTypography.heading.h3('mb-4 text-apple-gray-500')}>Colors</h3>
          <ul className="list-disc pl-6 space-y-2 text-apple-gray-300">
            <li>Always use the color system variables instead of direct hex values.</li>
            <li>Use the <code className="bg-apple-gray-100 px-1 py-0.5 rounded">getColor</code> utility for consistent opacity values.</li>
            <li>Maintain consistent text colors: primary text should use <code className="bg-apple-gray-100 px-1 py-0.5 rounded">text-apple-gray-500</code>.</li>
          </ul>
        </AppleCard>
        
        <AppleCard variant="glass" padding="lg" className="mt-6">
          <h3 className={applyTypography.heading.h3('mb-4 text-apple-gray-500')}>Components</h3>
          <ul className="list-disc pl-6 space-y-2 text-apple-gray-300">
            <li>Use AppleCard components consistently with appropriate variants.</li>
            <li>Maintain consistent padding and hover effects across similar elements.</li>
            <li>Use the same animation parameters (appleEasing) for all animations.</li>
          </ul>
        </AppleCard>
      </section>
    </div>
  );
}
