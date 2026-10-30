import type { WorkflowData } from '@belflow/shared';

/** A real, fully local example, with no external service or simulated output. */
export function starterWorkflow(firstName: string): WorkflowData {
  return {
    name: 'Mon premier flow BelFlow',
    nodes: [
      { id: 'belflow-start', name: 'Demarrer', type: 'belflow.manualTrigger', typeVersion: 1, position: [0, 0], parameters: {}, notes: 'Clique sur Exécuter pour démarrer.' },
      { id: 'belflow-profile', name: 'Mon profil', type: 'belflow.set', typeVersion: 1, position: [280, 0], parameters: {
        mode: 'manual', assignments: { assignments: [
          { id: 'name', name: 'prenom', value: firstName || 'BelFlow', type: 'string' },
          { id: 'project', name: 'projet', value: 'BelFlow', type: 'string' },
        ] },
      }, notes: 'Modifie le prénom pour personnaliser le résultat.' },
      { id: 'belflow-result', name: 'Mon message', type: 'belflow.set', typeVersion: 1, position: [560, 0], parameters: {
        mode: 'manual', includeOtherFields: true, assignments: { assignments: [
          { id: 'message', name: 'message', value: '=Bonjour {{ $json.prenom }}, bienvenue dans {{ $json.projet }} !', type: 'string' },
        ] },
      }, notes: 'Le message utilise les données de Mon profil. Ouvre Output après l’exécution.' },
    ],
    connections: {
      Demarrer: { main: [[{ node: 'Mon profil', type: 'main', index: 0 }]] },
      'Mon profil': { main: [[{ node: 'Mon message', type: 'main', index: 0 }]] },
    },
  };
}
