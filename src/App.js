import React, { useState, useEffect, useRef } from 'react';

// const fastStart2nd =
// 	'https://test-wa.s3.us-east-1.amazonaws.com/2nd_improved_high2.webm?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIAVVSvLgJ43Z8rNweFmfxqKV%2BOeBoL6D%2B04qGp4VU3XxAiAoh6rk2QeqK%2FO9woku8tfw%2FBfXMDSl8S2t8wDPH3d%2B3yrkAgg6EAAaDDc2NzM5NzgzNTczMSIMcY6E%2BSXm7NvBoGzjKsEC6VlzkzNe%2BcjZOMBafog56IABT3%2BPquIt0CctaPmdWl%2Br5wFxGbR4Ltf9DvxflzguZn%2BSc%2BBhwa%2BpOgWdmhDPwXYMFUBUomyHTIPC8NueASSW08DrCSVZNbTxkDpU6hzjtfxAN5ZHfTmfpG%2BTi7iWbQTXNZnaW2OodShjFrnWyQGEILhsjPIyH4fwiemDgaslehDoGM7oYWwJ3GV8EvUhPK6CtyqlJnjA2pwPBZ%2BvTJFBksKEXEtD6AZIvVRK9Gvw3n%2FzSYBTGe4lQ7XK%2BtRK41L2lRFK5k7yPs2E%2FH%2BW8iD4M71s8H7vHYsFlnTH4Mr3MoLlTrkF0pSM1n10QgZFsW8a6g83UkiJPlIxKIXC8GHGi%2FKDHo6u9obStIdmv36mliIi50Q1YSkZ7Hohi3McgnS4mG9m9xTZAjZYJ4iId36dMOzIqLcGOrQCTRVQRoSXSzoJx8gMngbDnjsiIrB4sp4WW1WZPq2v6T1mmH3oT84ryW35Gz8ABDkbBbeoGtF7YlA%2Bi%2FiwAq92ggqD%2Ba%2B4A2t1qDxRhxKiIfbe6RQXkrPRov%2FtCNl7BvKewBP8euWAl6QxE2acAaRA6exd2xaKzKJQ6w6NQtO6z9i1yEZLoEvGjAj4u%2BWFCD7c98nPBXbmJVRQY%2BXXbKF6%2B7HKnJaKBA0RYp%2BZhJK2sVarAoAYrdhsM95WQwTiCY5%2FDVVqljIZru6H%2BAU9fTmQHhlAya8HFOnfhhc4ud74S3msY5z9Wb37%2FIVboVzgp%2B2Th4bJS8K0MKQX8%2BPiBX9UQK3mJg%2FXwGWMATiuxfCQQx3%2B8BtXIk8xvEsbusg%2BXbIrlx%2BPDX8aHpmU4uwJzaGSt4d5wuU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240918T031415Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA3FLDZWPJ3PR5CAL2%2F20240918%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=468f1e2328aedd6a821ea73654a869a483b63fb5edccb1c8264f63eb886b15f6';

// const baseMax2nd =
// 	'https://test-wa.s3.us-east-1.amazonaws.com/2nd_base_max2.webm?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIAVVSvLgJ43Z8rNweFmfxqKV%2BOeBoL6D%2B04qGp4VU3XxAiAoh6rk2QeqK%2FO9woku8tfw%2FBfXMDSl8S2t8wDPH3d%2B3yrkAgg6EAAaDDc2NzM5NzgzNTczMSIMcY6E%2BSXm7NvBoGzjKsEC6VlzkzNe%2BcjZOMBafog56IABT3%2BPquIt0CctaPmdWl%2Br5wFxGbR4Ltf9DvxflzguZn%2BSc%2BBhwa%2BpOgWdmhDPwXYMFUBUomyHTIPC8NueASSW08DrCSVZNbTxkDpU6hzjtfxAN5ZHfTmfpG%2BTi7iWbQTXNZnaW2OodShjFrnWyQGEILhsjPIyH4fwiemDgaslehDoGM7oYWwJ3GV8EvUhPK6CtyqlJnjA2pwPBZ%2BvTJFBksKEXEtD6AZIvVRK9Gvw3n%2FzSYBTGe4lQ7XK%2BtRK41L2lRFK5k7yPs2E%2FH%2BW8iD4M71s8H7vHYsFlnTH4Mr3MoLlTrkF0pSM1n10QgZFsW8a6g83UkiJPlIxKIXC8GHGi%2FKDHo6u9obStIdmv36mliIi50Q1YSkZ7Hohi3McgnS4mG9m9xTZAjZYJ4iId36dMOzIqLcGOrQCTRVQRoSXSzoJx8gMngbDnjsiIrB4sp4WW1WZPq2v6T1mmH3oT84ryW35Gz8ABDkbBbeoGtF7YlA%2Bi%2FiwAq92ggqD%2Ba%2B4A2t1qDxRhxKiIfbe6RQXkrPRov%2FtCNl7BvKewBP8euWAl6QxE2acAaRA6exd2xaKzKJQ6w6NQtO6z9i1yEZLoEvGjAj4u%2BWFCD7c98nPBXbmJVRQY%2BXXbKF6%2B7HKnJaKBA0RYp%2BZhJK2sVarAoAYrdhsM95WQwTiCY5%2FDVVqljIZru6H%2BAU9fTmQHhlAya8HFOnfhhc4ud74S3msY5z9Wb37%2FIVboVzgp%2B2Th4bJS8K0MKQX8%2BPiBX9UQK3mJg%2FXwGWMATiuxfCQQx3%2B8BtXIk8xvEsbusg%2BXbIrlx%2BPDX8aHpmU4uwJzaGSt4d5wuU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240918T031350Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA3FLDZWPJ3PR5CAL2%2F20240918%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8800d9016a2f19c15fa917d3de526aae45670b32cf72d2111f2c53262845bd46';

// const noparamsUrl =
// 	'https://test-wa.s3.us-east-1.amazonaws.com/no_params.webm?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIAVVSvLgJ43Z8rNweFmfxqKV%2BOeBoL6D%2B04qGp4VU3XxAiAoh6rk2QeqK%2FO9woku8tfw%2FBfXMDSl8S2t8wDPH3d%2B3yrkAgg6EAAaDDc2NzM5NzgzNTczMSIMcY6E%2BSXm7NvBoGzjKsEC6VlzkzNe%2BcjZOMBafog56IABT3%2BPquIt0CctaPmdWl%2Br5wFxGbR4Ltf9DvxflzguZn%2BSc%2BBhwa%2BpOgWdmhDPwXYMFUBUomyHTIPC8NueASSW08DrCSVZNbTxkDpU6hzjtfxAN5ZHfTmfpG%2BTi7iWbQTXNZnaW2OodShjFrnWyQGEILhsjPIyH4fwiemDgaslehDoGM7oYWwJ3GV8EvUhPK6CtyqlJnjA2pwPBZ%2BvTJFBksKEXEtD6AZIvVRK9Gvw3n%2FzSYBTGe4lQ7XK%2BtRK41L2lRFK5k7yPs2E%2FH%2BW8iD4M71s8H7vHYsFlnTH4Mr3MoLlTrkF0pSM1n10QgZFsW8a6g83UkiJPlIxKIXC8GHGi%2FKDHo6u9obStIdmv36mliIi50Q1YSkZ7Hohi3McgnS4mG9m9xTZAjZYJ4iId36dMOzIqLcGOrQCTRVQRoSXSzoJx8gMngbDnjsiIrB4sp4WW1WZPq2v6T1mmH3oT84ryW35Gz8ABDkbBbeoGtF7YlA%2Bi%2FiwAq92ggqD%2Ba%2B4A2t1qDxRhxKiIfbe6RQXkrPRov%2FtCNl7BvKewBP8euWAl6QxE2acAaRA6exd2xaKzKJQ6w6NQtO6z9i1yEZLoEvGjAj4u%2BWFCD7c98nPBXbmJVRQY%2BXXbKF6%2B7HKnJaKBA0RYp%2BZhJK2sVarAoAYrdhsM95WQwTiCY5%2FDVVqljIZru6H%2BAU9fTmQHhlAya8HFOnfhhc4ud74S3msY5z9Wb37%2FIVboVzgp%2B2Th4bJS8K0MKQX8%2BPiBX9UQK3mJg%2FXwGWMATiuxfCQQx3%2B8BtXIk8xvEsbusg%2BXbIrlx%2BPDX8aHpmU4uwJzaGSt4d5wuU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240918T025020Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA3FLDZWPJ3PR5CAL2%2F20240918%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=da4794dc24e8f4862477b715f4378dc4011561b169295b578c8392af5e619c80';

// const faststartUrl =
// 	'https://test-wa.s3.us-east-1.amazonaws.com/improvedHigh.webm?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIAVVSvLgJ43Z8rNweFmfxqKV%2BOeBoL6D%2B04qGp4VU3XxAiAoh6rk2QeqK%2FO9woku8tfw%2FBfXMDSl8S2t8wDPH3d%2B3yrkAgg6EAAaDDc2NzM5NzgzNTczMSIMcY6E%2BSXm7NvBoGzjKsEC6VlzkzNe%2BcjZOMBafog56IABT3%2BPquIt0CctaPmdWl%2Br5wFxGbR4Ltf9DvxflzguZn%2BSc%2BBhwa%2BpOgWdmhDPwXYMFUBUomyHTIPC8NueASSW08DrCSVZNbTxkDpU6hzjtfxAN5ZHfTmfpG%2BTi7iWbQTXNZnaW2OodShjFrnWyQGEILhsjPIyH4fwiemDgaslehDoGM7oYWwJ3GV8EvUhPK6CtyqlJnjA2pwPBZ%2BvTJFBksKEXEtD6AZIvVRK9Gvw3n%2FzSYBTGe4lQ7XK%2BtRK41L2lRFK5k7yPs2E%2FH%2BW8iD4M71s8H7vHYsFlnTH4Mr3MoLlTrkF0pSM1n10QgZFsW8a6g83UkiJPlIxKIXC8GHGi%2FKDHo6u9obStIdmv36mliIi50Q1YSkZ7Hohi3McgnS4mG9m9xTZAjZYJ4iId36dMOzIqLcGOrQCTRVQRoSXSzoJx8gMngbDnjsiIrB4sp4WW1WZPq2v6T1mmH3oT84ryW35Gz8ABDkbBbeoGtF7YlA%2Bi%2FiwAq92ggqD%2Ba%2B4A2t1qDxRhxKiIfbe6RQXkrPRov%2FtCNl7BvKewBP8euWAl6QxE2acAaRA6exd2xaKzKJQ6w6NQtO6z9i1yEZLoEvGjAj4u%2BWFCD7c98nPBXbmJVRQY%2BXXbKF6%2B7HKnJaKBA0RYp%2BZhJK2sVarAoAYrdhsM95WQwTiCY5%2FDVVqljIZru6H%2BAU9fTmQHhlAya8HFOnfhhc4ud74S3msY5z9Wb37%2FIVboVzgp%2B2Th4bJS8K0MKQX8%2BPiBX9UQK3mJg%2FXwGWMATiuxfCQQx3%2B8BtXIk8xvEsbusg%2BXbIrlx%2BPDX8aHpmU4uwJzaGSt4d5wuU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240918T005454Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA3FLDZWPJ3PR5CAL2%2F20240918%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=743154fca9f3c4994abd1c925183733c62c6c7e2793d07a71276753c75fd4202';

//IMPROVED HIGH A
const faststartUrl1 =
	'https://test-wa.s3.us-east-1.amazonaws.com/improved_highNewSettingsA.webm?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIAVVSvLgJ43Z8rNweFmfxqKV%2BOeBoL6D%2B04qGp4VU3XxAiAoh6rk2QeqK%2FO9woku8tfw%2FBfXMDSl8S2t8wDPH3d%2B3yrkAgg6EAAaDDc2NzM5NzgzNTczMSIMcY6E%2BSXm7NvBoGzjKsEC6VlzkzNe%2BcjZOMBafog56IABT3%2BPquIt0CctaPmdWl%2Br5wFxGbR4Ltf9DvxflzguZn%2BSc%2BBhwa%2BpOgWdmhDPwXYMFUBUomyHTIPC8NueASSW08DrCSVZNbTxkDpU6hzjtfxAN5ZHfTmfpG%2BTi7iWbQTXNZnaW2OodShjFrnWyQGEILhsjPIyH4fwiemDgaslehDoGM7oYWwJ3GV8EvUhPK6CtyqlJnjA2pwPBZ%2BvTJFBksKEXEtD6AZIvVRK9Gvw3n%2FzSYBTGe4lQ7XK%2BtRK41L2lRFK5k7yPs2E%2FH%2BW8iD4M71s8H7vHYsFlnTH4Mr3MoLlTrkF0pSM1n10QgZFsW8a6g83UkiJPlIxKIXC8GHGi%2FKDHo6u9obStIdmv36mliIi50Q1YSkZ7Hohi3McgnS4mG9m9xTZAjZYJ4iId36dMOzIqLcGOrQCTRVQRoSXSzoJx8gMngbDnjsiIrB4sp4WW1WZPq2v6T1mmH3oT84ryW35Gz8ABDkbBbeoGtF7YlA%2Bi%2FiwAq92ggqD%2Ba%2B4A2t1qDxRhxKiIfbe6RQXkrPRov%2FtCNl7BvKewBP8euWAl6QxE2acAaRA6exd2xaKzKJQ6w6NQtO6z9i1yEZLoEvGjAj4u%2BWFCD7c98nPBXbmJVRQY%2BXXbKF6%2B7HKnJaKBA0RYp%2BZhJK2sVarAoAYrdhsM95WQwTiCY5%2FDVVqljIZru6H%2BAU9fTmQHhlAya8HFOnfhhc4ud74S3msY5z9Wb37%2FIVboVzgp%2B2Th4bJS8K0MKQX8%2BPiBX9UQK3mJg%2FXwGWMATiuxfCQQx3%2B8BtXIk8xvEsbusg%2BXbIrlx%2BPDX8aHpmU4uwJzaGSt4d5wuU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240918T005427Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA3FLDZWPJ3PR5CAL2%2F20240918%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=14baa10b21ad299b31851294eb8409d6198979376d17c43c48592822d189bc5c';
//BASE_MAX
const normalUrl =
	'https://test-wa.s3.us-east-1.amazonaws.com/baseMaxValera.webm?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIAVVSvLgJ43Z8rNweFmfxqKV%2BOeBoL6D%2B04qGp4VU3XxAiAoh6rk2QeqK%2FO9woku8tfw%2FBfXMDSl8S2t8wDPH3d%2B3yrkAgg6EAAaDDc2NzM5NzgzNTczMSIMcY6E%2BSXm7NvBoGzjKsEC6VlzkzNe%2BcjZOMBafog56IABT3%2BPquIt0CctaPmdWl%2Br5wFxGbR4Ltf9DvxflzguZn%2BSc%2BBhwa%2BpOgWdmhDPwXYMFUBUomyHTIPC8NueASSW08DrCSVZNbTxkDpU6hzjtfxAN5ZHfTmfpG%2BTi7iWbQTXNZnaW2OodShjFrnWyQGEILhsjPIyH4fwiemDgaslehDoGM7oYWwJ3GV8EvUhPK6CtyqlJnjA2pwPBZ%2BvTJFBksKEXEtD6AZIvVRK9Gvw3n%2FzSYBTGe4lQ7XK%2BtRK41L2lRFK5k7yPs2E%2FH%2BW8iD4M71s8H7vHYsFlnTH4Mr3MoLlTrkF0pSM1n10QgZFsW8a6g83UkiJPlIxKIXC8GHGi%2FKDHo6u9obStIdmv36mliIi50Q1YSkZ7Hohi3McgnS4mG9m9xTZAjZYJ4iId36dMOzIqLcGOrQCTRVQRoSXSzoJx8gMngbDnjsiIrB4sp4WW1WZPq2v6T1mmH3oT84ryW35Gz8ABDkbBbeoGtF7YlA%2Bi%2FiwAq92ggqD%2Ba%2B4A2t1qDxRhxKiIfbe6RQXkrPRov%2FtCNl7BvKewBP8euWAl6QxE2acAaRA6exd2xaKzKJQ6w6NQtO6z9i1yEZLoEvGjAj4u%2BWFCD7c98nPBXbmJVRQY%2BXXbKF6%2B7HKnJaKBA0RYp%2BZhJK2sVarAoAYrdhsM95WQwTiCY5%2FDVVqljIZru6H%2BAU9fTmQHhlAya8HFOnfhhc4ud74S3msY5z9Wb37%2FIVboVzgp%2B2Th4bJS8K0MKQX8%2BPiBX9UQK3mJg%2FXwGWMATiuxfCQQx3%2B8BtXIk8xvEsbusg%2BXbIrlx%2BPDX8aHpmU4uwJzaGSt4d5wuU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240918T005354Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA3FLDZWPJ3PR5CAL2%2F20240918%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b33dd4cdfa4a0d1435103f1ab3f4524ea095d637aec053a14442e1a0a25bec41';

function App() {
	return (
		<div className="App">
			<VideoComparison videoSrc1={faststartUrl1} videoSrc2={normalUrl} />
			{/* <VideoPlayer src={faststartUrl1} label="Video 1" /> */}
			{/* <VideoPlayer src={normalUrl} label="Video 2" /> */}
		</div>
	);
}

export default App;

const VideoPlayer = ({ src, label, onMetricsUpdate }) => {
	const [ isPlaying, setIsPlaying ] = useState(false);
	const [ playbackDelay, setPlaybackDelay ] = useState(null);
	const [ bufferedData, setBufferedData ] = useState(null);
	const [ bufferingRate, setBufferingRate ] = useState(null);
	const [ bufferingStart, setBufferingStart ] = useState(null);
	const [ bufferingEnd, setBufferingEnd ] = useState(null);
	const [ totalBufferTime, setTotalBufferTime ] = useState(0);
	const [ error, setError ] = useState(null);
	const [ initialLoadTime, setInitialLoadTime ] = useState(null);
	const [ videoResolution, setVideoResolution ] = useState({ width: null, height: null });
	const [ bitrate, setBitrate ] = useState(null); // Approximate bitrate
	const videoRef = useRef(null);

	const handlePlay = () => {
		videoRef.current.play().catch((err) => {
			setError('Error playing video: ' + err.message);
		});
		setIsPlaying(true);
	};

	const handlePause = () => {
		videoRef.current.pause();
		setIsPlaying(false);
	};

	useEffect(
		() => {
			const video = videoRef.current;
			let canPlayStartTime = null;
			let lastBufferedEnd = 0;
			let lastUpdateTime = performance.now();
			let lastBufferingStart = null;
			let initialLoadStartTime = performance.now();
			let previousBufferedEnd = 0;

			const updateBufferedData = () => {
				if (video.buffered.length > 0) {
					const bufferedEnd = video.buffered.end(video.buffered.length - 1);
					setBufferedData(bufferedEnd);

					// Calculate buffering rate
					const currentTime = performance.now();
					const timeElapsed = currentTime - lastUpdateTime;
					const dataBuffered = bufferedEnd - lastBufferedEnd;

					if (timeElapsed > 0) {
						setBufferingRate(dataBuffered / (timeElapsed / 1000)); // bytes per second
					}

					lastBufferedEnd = bufferedEnd;
					lastUpdateTime = currentTime;

					// Calculate bitrate (approximate)
					const bufferedDuration = video.currentTime - previousBufferedEnd;
					if (bufferedDuration > 0) {
						setBitrate(dataBuffered / bufferedDuration); // bytes per second
					}

					if (video.buffered.length > 0) {
						if (lastBufferingStart === null) {
							setBufferingStart(currentTime);
							lastBufferingStart = currentTime;
						}
						setBufferingEnd(currentTime);
						setTotalBufferTime((prevTotal) => prevTotal + (currentTime - lastBufferingStart) / 1000);
					}
				} else {
					if (lastBufferingStart !== null) {
						setBufferingEnd(null);
						setTotalBufferTime((prevTotal) => prevTotal + (performance.now() - lastBufferingStart) / 1000);
						lastBufferingStart = null;
					}
				}

				previousBufferedEnd = video.currentTime;
			};

			const handleError = (event) => {
				setError('Playback error: ' + event.target.error.message);
			};

			const handleLoadedMetadata = () => {
				const loadEndTime = performance.now();
				setInitialLoadTime(loadEndTime - initialLoadStartTime);

				// Set video resolution
				setVideoResolution({
					width: video.videoWidth,
					height: video.videoHeight
				});
			};

			const handleCanPlay = () => {
				canPlayStartTime = performance.now();
			};

			const handlePlaying = () => {
				if (canPlayStartTime) {
					const canPlayEndTime = performance.now();
					setPlaybackDelay(canPlayEndTime - canPlayStartTime);
				}
			};

			if (!video.canPlayType('video/webm')) {
				setError('WebM is not supported in this browser.');
			} else {
				video.addEventListener('error', handleError);
				video.addEventListener('loadedmetadata', handleLoadedMetadata);
				video.addEventListener('canplay', handleCanPlay);
				video.addEventListener('playing', handlePlaying);
				video.addEventListener('progress', updateBufferedData);
			}

			return () => {
				video.removeEventListener('error', handleError);
				video.removeEventListener('loadedmetadata', handleLoadedMetadata);
				video.removeEventListener('canplay', handleCanPlay);
				video.removeEventListener('playing', handlePlaying);
				video.removeEventListener('progress', updateBufferedData);
			};
		},
		[ src ]
	);

	useEffect(
		() => {
			onMetricsUpdate &&
				onMetricsUpdate({
					playbackDelay,
					bufferedData,
					bufferingRate,
					bitrate,
					videoResolution,
					bufferingStart,
					bufferingEnd,
					totalBufferTime,
					initialLoadTime,
					error
				});
		},
		[
			playbackDelay,
			bufferedData,
			bufferingRate,
			bitrate,
			videoResolution,
			bufferingStart,
			bufferingEnd,
			totalBufferTime,
			initialLoadTime,
			error
		]
	);

	return (
		<div>
			<h2>{label}</h2>
			<video
				ref={videoRef}
				autoPlay
				muted
				controls
				aria-label={`Video player for ${label}`}
				style={{ width: '100%', maxWidth: '600px' }}
			>
				<source src={src} type="video/webm" />
				Your browser does not support the video tag.
			</video>
			<button onClick={isPlaying ? handlePause : handlePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			{playbackDelay !== null && <p>Playback delay: {playbackDelay.toFixed(2)} ms</p>}
			{bufferedData !== null && <p>Buffered data: {bufferedData.toFixed(2)} seconds</p>}
			{bufferingRate !== null && <p>Buffering rate: {bufferingRate.toFixed(2)} bytes/second</p>}
			{bitrate !== null && <p>Approximate bitrate: {bitrate.toFixed(2)} bytes/second</p>}
			{videoResolution.width &&
			videoResolution.height && (
				<p>
					Video resolution: {videoResolution.width}x{videoResolution.height}
				</p>
			)}
			{bufferingStart !== null && <p>Buffering started at: {new Date(bufferingStart).toLocaleTimeString()}</p>}
			{bufferingEnd !== null && <p>Buffering ended at: {new Date(bufferingEnd).toLocaleTimeString()}</p>}
			{totalBufferTime > 0 && <p>Total buffer time: {totalBufferTime.toFixed(2)} seconds</p>}
			{initialLoadTime !== null && <p>Initial load time: {initialLoadTime.toFixed(2)} ms</p>}
		</div>
	);
};

const VideoComparison = ({ videoSrc1, videoSrc2 }) => {
	const [ metrics1, setMetrics1 ] = useState({});
	const [ metrics2, setMetrics2 ] = useState({});

	return (
		<div>
			<VideoPlayer src={videoSrc1} label="Video 1" onMetricsUpdate={(metrics) => setMetrics1(metrics)} />
			<VideoPlayer src={videoSrc2} label="Video 2" onMetricsUpdate={(metrics) => setMetrics2(metrics)} />
			<h3>Comparison</h3>
			{metrics1.initialLoadTime !== null &&
			metrics2.initialLoadTime !== null && (
				<p>
					Initial Load Time Difference:{' '}
					{Math.abs(metrics1.initialLoadTime - metrics2.initialLoadTime).toFixed(2)} ms
				</p>
			)}
			{metrics1.bufferingRate !== null &&
			metrics2.bufferingRate !== null && (
				<p>
					Buffering Rate Difference: {Math.abs(metrics1.bufferingRate - metrics2.bufferingRate).toFixed(
						2
					)}{' '}
					bytes/second
				</p>
			)}
			{metrics1.bitrate !== null &&
			metrics2.bitrate !== null && (
				<p>Bitrate Difference: {Math.abs(metrics1.bitrate - metrics2.bitrate).toFixed(2)} bytes/second</p>
			)}
			{metrics1.totalBufferTime !== 0 &&
			metrics2.totalBufferTime !== 0 && (
				<p>
					Total Buffer Time Difference:{' '}
					{Math.abs(metrics1.totalBufferTime - metrics2.totalBufferTime).toFixed(2)} seconds
				</p>
			)}
		</div>
	);
};
