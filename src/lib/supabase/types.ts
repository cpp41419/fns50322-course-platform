export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string;
          created_at: string;
          email: string;
          name: string | null;
          phone: string | null;
          source: string;
          provider_interest: string | null;
          state: string | null;
          budget: string | null;
          timeline: string | null;
          status: "new" | "contacted" | "converted" | "closed";
          notes: string | null;
          utm_source: string | null;
          utm_medium: string | null;
          utm_campaign: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          email: string;
          name?: string | null;
          phone?: string | null;
          source: string;
          provider_interest?: string | null;
          state?: string | null;
          budget?: string | null;
          timeline?: string | null;
          status?: "new" | "contacted" | "converted" | "closed";
          notes?: string | null;
          utm_source?: string | null;
          utm_medium?: string | null;
          utm_campaign?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          email?: string;
          name?: string | null;
          phone?: string | null;
          source?: string;
          provider_interest?: string | null;
          state?: string | null;
          budget?: string | null;
          timeline?: string | null;
          status?: "new" | "contacted" | "converted" | "closed";
          notes?: string | null;
          utm_source?: string | null;
          utm_medium?: string | null;
          utm_campaign?: string | null;
        };
      };
      quiz_submissions: {
        Row: {
          id: string;
          created_at: string;
          email: string | null;
          answers: Json;
          recommended_providers: string[];
          score: number | null;
          completed: boolean;
          session_id: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          email?: string | null;
          answers: Json;
          recommended_providers?: string[];
          score?: number | null;
          completed?: boolean;
          session_id?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          email?: string | null;
          answers?: Json;
          recommended_providers?: string[];
          score?: number | null;
          completed?: boolean;
          session_id?: string | null;
        };
      };
      provider_enquiries: {
        Row: {
          id: string;
          created_at: string;
          provider_slug: string;
          email: string;
          name: string | null;
          phone: string | null;
          message: string | null;
          source_page: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          provider_slug: string;
          email: string;
          name?: string | null;
          phone?: string | null;
          message?: string | null;
          source_page: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          provider_slug?: string;
          email?: string;
          name?: string | null;
          phone?: string | null;
          message?: string | null;
          source_page?: string;
        };
      };
      page_views: {
        Row: {
          id: string;
          created_at: string;
          page_path: string;
          referrer: string | null;
          user_agent: string | null;
          session_id: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          page_path: string;
          referrer?: string | null;
          user_agent?: string | null;
          session_id?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          page_path?: string;
          referrer?: string | null;
          user_agent?: string | null;
          session_id?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      lead_status: "new" | "contacted" | "converted" | "closed";
    };
  };
}

export type Lead = Database["public"]["Tables"]["leads"]["Row"];
export type QuizSubmission = Database["public"]["Tables"]["quiz_submissions"]["Row"];
export type ProviderEnquiry = Database["public"]["Tables"]["provider_enquiries"]["Row"];
export type PageView = Database["public"]["Tables"]["page_views"]["Row"];
