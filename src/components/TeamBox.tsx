import Team from "./Team";
import EmptyBox from "./EmptyBox";

interface TeamBoxProps {
    teamName?: string;
    droppedTeam?: { name: string, fromBox: number } | null;
    isDragOver: boolean;
    handleOnDrop: (e: React.DragEvent, team: 'team1' | 'team2') => void;
    handleOnDragOver: (e: React.DragEvent) => void;
    handleDragEnter: (e: React.DragEvent, team: 'team1' | 'team2') => void;
    handleDragLeave: (e: React.DragEvent, team: 'team1' | 'team2') => void;
    team: 'team1' | 'team2';
    boxNumber: number;
  }

const TeamBox = ({
  teamName,
  droppedTeam,
  isDragOver,
  handleOnDrop,
  handleOnDragOver,
  handleDragEnter,
  handleDragLeave,
  team,
  boxNumber
}: TeamBoxProps) => {
  return (
    <>
      {teamName || droppedTeam ? (
        <Team teamName={teamName || droppedTeam?.name || ''} fromBox={boxNumber} />
      ) : (
        <EmptyBox
          isDragOver={isDragOver}
          handleOnDrop={(e) => handleOnDrop(e, team)}
          handleOnDragOver={handleOnDragOver}
          handleDragEnter={(e) => handleDragEnter(e, team)}
          handleDragLeave={handleDragLeave}
          team={team}
        />
      )}
    </>
  );
};

export default TeamBox;