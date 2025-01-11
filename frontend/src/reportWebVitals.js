import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

// Function to handle the web vitals metrics
const reportWebVitalsHandler = (metric) => {
  console.log(metric); // Log the metric or send it to an analytics endpoint
};

// Attach each web vitals listener
onCLS(reportWebVitalsHandler);
onFCP(reportWebVitalsHandler);
onFID(reportWebVitalsHandler);
onLCP(reportWebVitalsHandler);
onTTFB(reportWebVitalsHandler);

export { reportWebVitalsHandler };
