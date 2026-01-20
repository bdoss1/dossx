import { z } from 'zod'

// ============================================================================
// VALIDATION SCHEMAS
// ============================================================================

export const businessHoursSchema = z.object({
  monday: z.object({ enabled: z.boolean(), start: z.string(), end: z.string() }),
  tuesday: z.object({ enabled: z.boolean(), start: z.string(), end: z.string() }),
  wednesday: z.object({ enabled: z.boolean(), start: z.string(), end: z.string() }),
  thursday: z.object({ enabled: z.boolean(), start: z.string(), end: z.string() }),
  friday: z.object({ enabled: z.boolean(), start: z.string(), end: z.string() }),
  saturday: z.object({ enabled: z.boolean(), start: z.string(), end: z.string() }),
  sunday: z.object({ enabled: z.boolean(), start: z.string(), end: z.string() }),
})

export const escalationContactSchema = z.object({
  name: z.string().min(1),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  role: z.string().optional(),
})

export const routingRuleSchema = z.object({
  intent: z.string().min(1),
  action: z.enum(['transfer', 'message', 'escalate', 'schedule']),
  target: z.string().optional(),
  message: z.string().optional(),
})

export const afterHoursBehaviorSchema = z.object({
  action: z.enum(['voicemail', 'email_notify', 'text_notify', 'schedule_callback']),
  notifyEmail: z.string().email().optional(),
  notifyPhone: z.string().optional(),
  customMessage: z.string().optional(),
})

export const appointmentTypeSchema = z.object({
  name: z.string().min(1),
  durationMinutes: z.number().min(5).max(480),
  bufferMinutes: z.number().min(0).max(60).default(0),
  description: z.string().optional(),
})

export const bookingRulesSchema = z.object({
  leadTimeHours: z.number().min(0).max(168).default(24), // max 1 week
  maxPerDay: z.number().min(1).max(50).default(10),
  advanceBookingDays: z.number().min(1).max(90).default(30),
})

export const goalsSchema = z.object({
  answerFaqs: z.boolean().default(false),
  qualifyLeads: z.boolean().default(false),
  scheduleAppointments: z.boolean().default(false),
  routeCalls: z.boolean().default(false),
  takeMessages: z.boolean().default(false),
  successCriteria: z.string().optional(),
})

// ============================================================================
// SETUP FORM SCHEMA
// ============================================================================

export const setupFormSchema = z.object({
  // Company info
  businessName: z.string().min(1, 'Business name is required'),
  websiteUrl: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  contactName: z.string().min(1, 'Contact name is required'),
  contactEmail: z.string().email('Please enter a valid email'),
  timezone: z.string().min(1, 'Timezone is required'),

  // Agent identity
  agentName: z.string().min(1, 'Agent name is required'),
  tonePreset: z.enum(['professional', 'friendly', 'luxury', 'custom']),
  toneNotes: z.string().optional(),
  greetingScript: z.string().min(10, 'Greeting must be at least 10 characters'),

  // Goals
  goals: goalsSchema,

  // Business hours
  businessHours: businessHoursSchema,

  // After hours behavior
  afterHoursBehavior: afterHoursBehaviorSchema,

  // Escalation contacts
  escalationContacts: z.array(escalationContactSchema).min(1, 'At least one escalation contact is required'),

  // Routing rules
  routingRules: z.array(routingRuleSchema).optional(),

  // Knowledge base URLs
  knowledgeUrls: z.array(z.string().url()).optional(),
  knowledgeText: z.string().optional(),
  knowledgeQA: z.array(z.object({
    question: z.string().min(1),
    answer: z.string().min(1),
  })).optional(),

  // Scheduling
  offersAppointments: z.boolean().default(false),
  appointmentTypes: z.array(appointmentTypeSchema).optional(),
  bookingRules: bookingRulesSchema.optional(),

  // Consent
  acceptedTerms: z.boolean().refine((val) => val === true, 'You must accept the terms'),
  acceptedCallPolicy: z.boolean().refine((val) => val === true, 'You must accept the call policy'),
})

export type SetupFormData = z.infer<typeof setupFormSchema>
export type BusinessHours = z.infer<typeof businessHoursSchema>
export type EscalationContact = z.infer<typeof escalationContactSchema>
export type RoutingRule = z.infer<typeof routingRuleSchema>
export type AfterHoursBehavior = z.infer<typeof afterHoursBehaviorSchema>
export type AppointmentType = z.infer<typeof appointmentTypeSchema>
export type BookingRules = z.infer<typeof bookingRulesSchema>
export type Goals = z.infer<typeof goalsSchema>

// ============================================================================
// AGENT UPDATE SCHEMA
// ============================================================================

export const agentUpdateSchema = z.object({
  name: z.string().min(1).optional(),
  greetingScript: z.string().optional(),
  tonePreset: z.enum(['professional', 'friendly', 'luxury', 'custom']).optional(),
  toneNotes: z.string().optional(),
  businessHours: businessHoursSchema.optional(),
  routingRules: z.array(routingRuleSchema).optional(),
  afterHoursBehavior: afterHoursBehaviorSchema.optional(),
  escalationContacts: z.array(escalationContactSchema).optional(),
  offersAppointments: z.boolean().optional(),
  appointmentTypes: z.array(appointmentTypeSchema).optional(),
  bookingRules: bookingRulesSchema.optional(),
  status: z.enum(['DRAFT', 'CONFIGURING', 'ACTIVE', 'PAUSED', 'NEEDS_ATTENTION']).optional(),
})

export type AgentUpdateData = z.infer<typeof agentUpdateSchema>

// ============================================================================
// KNOWLEDGE SOURCE SCHEMA
// ============================================================================

export const knowledgeSourceCreateSchema = z.object({
  type: z.enum(['URL', 'FILE', 'MANUAL', 'QA']),
  title: z.string().min(1),
  location: z.string().min(1), // URL or file key
  content: z.string().optional(), // For pasted text or Q&A
})

export type KnowledgeSourceCreate = z.infer<typeof knowledgeSourceCreateSchema>

// ============================================================================
// CALENDAR RULES SCHEMA
// ============================================================================

export const calendarRulesSchema = z.object({
  selectedCalendars: z.array(z.object({
    provider: z.enum(['google', 'microsoft']),
    calendarId: z.string(),
    name: z.string(),
  })),
  blackoutDates: z.array(z.object({
    date: z.string(),
    reason: z.string().optional(),
  })).optional(),
  preferredTimes: z.array(z.object({
    dayOfWeek: z.number().min(0).max(6),
    startTime: z.string(),
    endTime: z.string(),
  })).optional(),
})

export type CalendarRules = z.infer<typeof calendarRulesSchema>

// ============================================================================
// PLAN DEFINITIONS
// ============================================================================

export const VOXIA_PLANS = {
  LAUNCH: {
    id: 'LAUNCH',
    name: 'Launch',
    description: 'Core voice agent with essential routing capabilities',
    features: [
      'AI-powered voice agent',
      'Basic call routing',
      'Voicemail to email',
      'Business hours management',
      'Knowledge base (up to 10 sources)',
      'Email support',
    ],
    highlighted: false,
  },
  GROWTH: {
    id: 'GROWTH',
    name: 'Growth',
    description: 'Multi-flow agent with CRM integration and analytics',
    features: [
      'Everything in Launch',
      'Multi-flow conversation design',
      'CRM integration',
      'Call analytics & insights',
      'Appointment scheduling',
      'Knowledge base (up to 50 sources)',
      'Priority email support',
    ],
    highlighted: true,
  },
  SCALE: {
    id: 'SCALE',
    name: 'Scale',
    description: 'Advanced routing with continuous refinement',
    features: [
      'Everything in Growth',
      'Advanced routing logic',
      'Continuous agent refinement',
      'Custom integrations',
      'Unlimited knowledge sources',
      'Dedicated success manager',
      'Phone & email support',
    ],
    highlighted: false,
  },
} as const

export type VoxiaPlanId = keyof typeof VOXIA_PLANS
