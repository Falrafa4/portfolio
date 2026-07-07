import { Mail, FileText, Download, ExternalLink } from 'lucide-react';
import contactsData from '../../data/contacts.json';
import PageTransition from '../../components/common/PageTransition';

export default function Contact() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto pb-12">
        {/* Folder Header */}
        <div className="mb-8 border-b border-border pb-4">
          <h1 className="text-2xl font-bold text-text-main flex items-center gap-2">
            <svg
              className="w-7 h-7 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
            </svg>
            Contact
          </h1>
          <p className="text-text-muted mt-1 text-sm">
            Get in touch or download my professional credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact info list */}
          <div className="flex flex-col gap-6">
            <h2 className="text-lg font-bold text-text-main">Channels</h2>
            
            {/* Email Card */}
            {contactsData.email && (
              <a
                href={`mailto:${contactsData.email}`}
                className="flex items-center gap-4 p-4 bg-surface border border-border rounded-lg shadow-sm hover:shadow-md hover:border-primary/50 hover:bg-black/10 dark:hover:bg-white/10 transition-all select-none group"
              >
                <div className="p-3 bg-background rounded-md text-primary group-hover:bg-primary/10 transition-colors">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs text-text-muted font-medium">Email</span>
                  <span className="block text-sm font-semibold text-text-main truncate">{contactsData.email}</span>
                </div>
                <ExternalLink size={14} className="text-text-muted ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            )}

            {/* GitHub Card */}
            {contactsData.github && (
              <a
                href={contactsData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-surface border border-border rounded-lg shadow-sm hover:shadow-md hover:border-primary/50 hover:bg-black/10 dark:hover:bg-white/10 transition-all select-none group"
              >
                <div className="p-3 bg-background rounded-md text-primary group-hover:bg-primary/10 transition-colors">
                  <svg className="w-5 h-5 fill-current text-text-main" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="block text-xs text-text-muted font-medium">GitHub</span>
                  <span className="block text-sm font-semibold text-text-main truncate">GitHub Profile</span>
                </div>
                <ExternalLink size={14} className="text-text-muted ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            )}

            {/* LinkedIn Card */}
            {contactsData.linkedin && (
              <a
                href={contactsData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-surface border border-border rounded-lg shadow-sm hover:shadow-md hover:border-primary/50 hover:bg-black/10 dark:hover:bg-white/10 transition-all select-none group"
              >
                <div className="p-3 bg-background rounded-md text-primary group-hover:bg-primary/10 transition-colors">
                  <svg className="w-5 h-5 fill-current text-text-main" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="block text-xs text-text-muted font-medium">LinkedIn</span>
                  <span className="block text-sm font-semibold text-text-main truncate">LinkedIn Profile</span>
                </div>
                <ExternalLink size={14} className="text-text-muted ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            )}
          </div>

          {/* Credentials / Download */}
          <div className="flex flex-col gap-6">
            <h2 className="text-lg font-bold text-text-main">Documents</h2>

            {/* Resume Card */}
            {contactsData.resumeUrl && (
              <div className="p-6 bg-surface border border-border rounded-lg shadow-sm flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/5 rounded-md text-primary">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-main">Curriculum Vitae</h3>
                    <p className="text-xs text-text-muted mt-1 leading-relaxed">
                      Download my updated resume to view my complete academic background and job qualifications.
                    </p>
                  </div>
                </div>
                
                <a
                  href={contactsData.resumeUrl}
                  download
                  className="mt-2 inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-md shadow transition-colors select-none"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
