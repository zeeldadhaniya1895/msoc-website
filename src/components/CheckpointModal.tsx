import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

interface CheckpointModalProps {
  isOpen: boolean;
  onClose: () => void;
  trackId: string;
}

const CheckpointModal = ({ isOpen, onClose, trackId }: CheckpointModalProps) => {
  const navigate = useNavigate();
  
  const navigateToCheckpoint = (checkpoint: number) => {
    navigate(`/${trackId}/checkpoint/${checkpoint}`);
    onClose();
  };
  
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl glass-card p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold leading-6 gradient-text mb-4 text-center"
                >
                  {trackId === 'mern' ? 'MERN Track' : 'GenAI Track'} Checkpoints
                </Dialog.Title>
                
                <div className="mt-4 space-y-3">
                  <button
                    onClick={() => navigateToCheckpoint(1)}
                    className="w-full py-3 px-4 rounded-xl glass-card-light border border-primary/30 hover:border-primary transition flex justify-between items-center"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-lg">1</div>
                      <span className="font-bold text-white">Checkpoint 1</span>
                    </div>
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => navigateToCheckpoint(2)}
                    className="w-full py-3 px-4 rounded-xl glass-card-light border border-primary/30 hover:border-primary transition flex justify-between items-center"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-lg">2</div>
                      <span className="font-bold text-white">Checkpoint 2</span>
                    </div>
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  <div className="w-full py-3 px-4 rounded-xl glass-card-light border border-gray-700/30 opacity-50 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gray-700/20 flex items-center justify-center text-lg">3</div>
                      <span className="font-bold text-white">Checkpoint 3</span>
                    </div>
                    <span className="text-sm text-gray-400">Coming Soon</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CheckpointModal; 