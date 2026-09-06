import {
  IconLayoutDashboard,
  IconSearch,
  IconTable,
  IconMailFast,
  IconFileExport,
  IconChartBar,
} from "@tabler/icons-react";

const SCREENS = [
  {
    title: "Lead Dashboard",
    desc: "Your pipeline at a glance",
    color: "#006285",
    bg: "from-[#006285] to-[#004a66]",
    icon: <IconLayoutDashboard size={22} color="#fff" />,
    mock: (
      <div className="space-y-2">
        <div className="flex gap-2">
          <div className="flex-1 bg-[#006285]/15 rounded-lg p-2.5 text-center">
            <div className="text-[#006285] font-black text-base leading-none">1,284</div>
            <div className="text-[#888] text-[10px] mt-0.5">Leads</div>
          </div>
          <div className="flex-1 bg-[#00A86B]/15 rounded-lg p-2.5 text-center">
            <div className="text-[#00A86B] font-black text-base leading-none">89%</div>
            <div className="text-[#888] text-[10px] mt-0.5">Verified</div>
          </div>
          <div className="flex-1 bg-[#0099CC]/15 rounded-lg p-2.5 text-center">
            <div className="text-[#0099CC] font-black text-base leading-none">42</div>
            <div className="text-[#888] text-[10px] mt-0.5">Replies</div>
          </div>
        </div>
        <div className="h-1.5 bg-[#E5E7EB] rounded-full overflow-hidden">
          <div className="h-full w-[72%] bg-gradient-to-r from-[#006285] to-[#0099CC] rounded-full" />
        </div>
        <div className="flex justify-between text-[10px] text-[#888]">
          <span>Pipeline progress</span><span>72%</span>
        </div>
      </div>
    ),
  },
  {
    title: "Company Search",
    desc: "Filter by industry & location",
    color: "#00A86B",
    bg: "from-[#00A86B] to-[#007a4d]",
    icon: <IconSearch size={22} color="#fff" />,
    mock: (
      <div className="space-y-2">
        <div className="flex items-center gap-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg px-2.5 py-1.5">
          <IconSearch size={11} className="text-[#888]" />
          <span className="text-[10px] text-[#888]">Lagos · Insurance · 50+ employees</span>
        </div>
        {["Northbridge Insurance", "Coastal Assurance", "Prime Underwriters"].map((name, i) => (
          <div key={name} className="flex items-center justify-between px-2.5 py-1.5 bg-[#F8FAFC] rounded-lg border border-[#E5E7EB]/60">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-[#00A86B]/15 flex items-center justify-center">
                <span className="text-[8px] font-bold text-[#00A86B]">{name[0]}</span>
              </div>
              <span className="text-[10px] font-medium text-[#1A3A5C]">{name}</span>
            </div>
            <span className="text-[8px] bg-[#e6f7f1] text-[#00A86B] font-bold px-1.5 py-0.5 rounded-full">Verified</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Leads Table",
    desc: "Manage and export your contacts",
    color: "#1A3A5C",
    bg: "from-[#1A3A5C] to-[#0d2540]",
    icon: <IconTable size={22} color="#fff" />,
    mock: (
      <div className="space-y-1.5">
        <div className="grid grid-cols-3 gap-1 pb-1 border-b border-[#E5E7EB]">
          {["Company", "Email", "Phone"].map((h) => (
            <div key={h} className="text-[9px] font-bold text-[#888] uppercase tracking-wide">{h}</div>
          ))}
        </div>
        {[
          ["Acme Industries", "info@acme-industries.ng", "+234 8xx"],
          ["Sunrise Logistics", "sales@sunriselogistics.ng", "+234 7xx"],
          ["GreenField Mfg", "corp@greenfieldmfg.ng", "+234 9xx"],
        ].map(([company, email, phone]) => (
          <div key={company} className="grid grid-cols-3 gap-1 py-1 border-b border-[#F8FAFC]">
            <span className="text-[9px] text-[#1A3A5C] font-medium truncate">{company}</span>
            <span className="text-[9px] text-[#888] truncate">{email}</span>
            <span className="text-[9px] text-[#888]">{phone}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Email Campaigns",
    desc: "Send personalised bulk outreach",
    color: "#0099CC",
    bg: "from-[#0099CC] to-[#006e99]",
    icon: <IconMailFast size={22} color="#fff" />,
    mock: (
      <div className="space-y-2">
        <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg p-2.5 text-[10px]">
          <div className="font-semibold text-[#1A3A5C] mb-1">Subject: Partnership Opportunity</div>
          <div className="text-[#888] leading-relaxed">Hi {"{{first_name}}"}, I came across your company and wanted to reach out about…</div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 text-center">
            <div className="text-[#0099CC] font-black text-sm">22%</div>
            <div className="text-[9px] text-[#888]">Open rate</div>
          </div>
          <div className="flex-1 text-center">
            <div className="text-[#00A86B] font-black text-sm">6%</div>
            <div className="text-[9px] text-[#888]">Click rate</div>
          </div>
          <div className="flex-1 text-center">
            <div className="text-[#006285] font-black text-sm">800</div>
            <div className="text-[9px] text-[#888]">Sent</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Export Screen",
    desc: "Download leads in Excel or CSV",
    color: "#00C48C",
    bg: "from-[#00C48C] to-[#009966]",
    icon: <IconFileExport size={22} color="#fff" />,
    mock: (
      <div className="space-y-2">
        {[
          { label: "leads_lagos_insurance.xlsx", size: "2.4 MB", ready: true },
          { label: "leads_abuja_fintech.csv", size: "1.1 MB", ready: true },
          { label: "leads_ph_logistics.xlsx", size: "890 KB", ready: false },
        ].map((file) => (
          <div key={file.label} className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg px-2.5 py-1.5">
            <div>
              <div className="text-[9px] font-semibold text-[#1A3A5C] truncate max-w-[120px]">{file.label}</div>
              <div className="text-[9px] text-[#888]">{file.size}</div>
            </div>
            <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${file.ready ? "bg-[#e6f7f1] text-[#00A86B]" : "bg-[#FEF3C7] text-[#D97706]"}`}>
              {file.ready ? "Ready" : "Processing"}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Analytics",
    desc: "Track campaign performance",
    color: "#006285",
    bg: "from-[#006285] to-[#003d54]",
    icon: <IconChartBar size={22} color="#fff" />,
    mock: (
      <div className="space-y-2">
        <div className="flex items-end gap-1.5 h-14">
          {[40, 65, 45, 80, 60, 90, 72].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i === 5 ? "#00C48C" : "#006285", opacity: i === 5 ? 1 : 0.4 + i * 0.08 }} />
          ))}
        </div>
        <div className="flex justify-between text-[9px] text-[#888]">
          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span className="text-[#00C48C] font-bold">Sat</span><span>Sun</span>
        </div>
        <div className="flex items-center gap-1.5 pt-1">
          <div className="w-2 h-2 rounded-full bg-[#00C48C]" />
          <span className="text-[9px] text-[#888]">Peak: Saturday — 90 interactions</span>
        </div>
      </div>
    ),
  },
];

export default function ProductScreenshots() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block bg-[#006285]/8 border border-[#006285]/15 text-[#006285] font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Product Tour
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628]">
            A dashboard built for sales teams
          </h2>
          <p className="mt-4 text-[#888888] text-base">
            Every tool your team needs — in one clean interface.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SCREENS.map((screen) => (
            <div
              key={screen.title}
              className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-[#006285]/25 transition-all duration-300 group"
            >
              {/* Card header */}
              <div className={`bg-gradient-to-r ${screen.bg} px-5 py-4 flex items-center gap-3`}>
                <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  {screen.icon}
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">{screen.title}</p>
                  <p className="text-white/65 text-xs mt-0.5">{screen.desc}</p>
                </div>
              </div>

              {/* Mock UI preview */}
              <div className="p-4">
                {screen.mock}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
