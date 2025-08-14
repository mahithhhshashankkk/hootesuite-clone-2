import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-dashboard',
  templateUrl: './privacy-dashboard.component.html',
  styleUrls: ['./privacy-dashboard.component.css']
})
export class PrivacyDashboardComponent implements OnInit {
  
  connectedPlatforms = [
    { name: 'Facebook', connected: true, lastScan: '2 min ago', riskLevel: 'HIGH', issues: 5 },
    { name: 'Instagram', connected: true, lastScan: '5 min ago', riskLevel: 'MEDIUM', issues: 3 },
    { name: 'LinkedIn', connected: true, lastScan: '10 min ago', riskLevel: 'LOW', issues: 1 },
    { name: 'X (Twitter)', connected: true, lastScan: '1 min ago', riskLevel: 'HIGH', issues: 7 },
    { name: 'Reddit', connected: false, lastScan: null, riskLevel: null, issues: 0 },
    { name: 'TikTok', connected: true, lastScan: '3 min ago', riskLevel: 'MEDIUM', issues: 4 },
    { name: 'YouTube', connected: false, lastScan: null, riskLevel: null, issues: 0 }
  ];

  recentAlerts = [
    {
      type: 'EXPOSURE',
      platform: 'Facebook',
      message: 'Your birthday is now publicly visible',
      timestamp: '2 minutes ago',
      severity: 'HIGH',
      action: 'Auto-fix available'
    },
    {
      type: 'TAG',
      platform: 'Instagram',
      message: 'You were tagged in a public post revealing your location',
      timestamp: '5 minutes ago',
      severity: 'MEDIUM',
      action: 'Review required'
    },
    {
      type: 'CONTENT',
      platform: 'X',
      message: 'Recent tweet contains personal phone number',
      timestamp: '8 minutes ago',
      severity: 'HIGH',
      action: 'Auto-delete recommended'
    }
  ];

  privacyInsights = [
    {
      category: 'Personal Information',
      exposed: 'Email, Phone, Birthday, Workplace',
      platforms: ['Facebook', 'LinkedIn', 'Instagram'],
      recommendation: 'Hide personal details from public view',
      autoFixAvailable: true
    },
    {
      category: 'Location Data',
      exposed: 'Home address, Check-ins, Geotagged photos',
      platforms: ['Facebook', 'Instagram', 'X'],
      recommendation: 'Disable location tracking and remove geotags',
      autoFixAvailable: true
    },
    {
      category: 'Social Connections',
      exposed: 'Friends list, Family members, Professional contacts',
      platforms: ['Facebook', 'LinkedIn'],
      recommendation: 'Limit visibility of connections and relationships',
      autoFixAvailable: false
    }
  ];

  overallRiskScore = 68;
  scanningStatus = 'ACTIVE';
  totalIssuesFound = 20;
  autoFixesApplied = 12;

  constructor() { }

  ngOnInit(): void {
    this.startRealTimeMonitoring();
  }

  connectPlatform(platform: string) {
    console.log(`Connecting to ${platform}...`);
    // In a real app, this would initiate OAuth flow
    alert(`Connect to ${platform} - OAuth flow would start here`);
  }

  runFullAudit() {
    console.log('Starting comprehensive privacy audit...');
    this.scanningStatus = 'SCANNING';
    
    // Simulate audit process
    setTimeout(() => {
      this.scanningStatus = 'ACTIVE';
      alert('Privacy audit complete! Found 3 new vulnerabilities across your connected accounts.');
    }, 3000);
  }

  applyAutoFix(insight: any) {
    console.log('Applying auto-fix for:', insight.category);
    alert(`Auto-fixing ${insight.category} privacy settings across all connected platforms...`);
  }

  dismissAlert(alert: any) {
    const index = this.recentAlerts.indexOf(alert);
    if (index > -1) {
      this.recentAlerts.splice(index, 1);
    }
  }

  startRealTimeMonitoring() {
    // Simulate real-time monitoring
    setInterval(() => {
      if (Math.random() > 0.95) { // 5% chance every interval
        this.addNewAlert();
      }
    }, 10000); // Check every 10 seconds
  }

  private addNewAlert() {
    const newAlert = {
      type: 'EXPOSURE',
      platform: this.getRandomPlatform(),
      message: 'New privacy risk detected in recent activity',
      timestamp: 'Just now',
      severity: Math.random() > 0.5 ? 'HIGH' : 'MEDIUM',
      action: 'Auto-fix available'
    };
    this.recentAlerts.unshift(newAlert);
    if (this.recentAlerts.length > 5) {
      this.recentAlerts.pop();
    }
  }

  private getRandomPlatform(): string {
    const platforms = ['Facebook', 'Instagram', 'LinkedIn', 'X', 'TikTok'];
    return platforms[Math.floor(Math.random() * platforms.length)];
  }
}
