/* global wp */

import React from "react";
import PropTypes from "prop-types";
import { Provider as StoreProvider } from "react-redux";

import SidebarItem from "./SidebarItem";
import keywordUpsellProps from "../values/keywordUpsellProps";
import SeoAnalysis from "./contentAnalysis/SeoAnalysis";

/**
 * Creates the Metabox component.
 *
 * @param {Object} settings The feature toggles.
 * @param {Object} store The Redux store.
 *
 * @returns {ReactElement} The Metabox component.
 */
export default function Metabox( { settings, store } ) {
	const { Fill } = wp.components;

	return (
		<Fill name="YoastMetabox">
			{ settings.isContentAnalysisActive && <SidebarItem renderPriority={ 10 }>Readability analysis</SidebarItem> }
			{ settings.isKeywordAnalysisActive && <SidebarItem renderPriority={ 20 }>
				<StoreProvider store={ store } >
					<SeoAnalysis
					shouldUpsell={ settings.shouldUpsell }
					keywordUpsell={ keywordUpsellProps }
					/>
				</StoreProvider>
			</SidebarItem> }
		</Fill>
	);
}

Metabox.propTypes = {
	settings: PropTypes.object,
	store: PropTypes.object,
};
